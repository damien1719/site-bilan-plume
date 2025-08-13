import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

type NewsletterPayload = {
  email: string
}

export async function POST(request: Request) {
  try {
    const data = (await request.json()) as Partial<NewsletterPayload>

    const email = (data.email || "").trim()
    const isEmailValid = /[^\s@]+@[^\s@]+\.[^\s@]+/.test(email)
    if (!isEmailValid) {
      return NextResponse.json({ error: "Email invalide" }, { status: 400 })
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    const toAddress = process.env.LEAD_TO_EMAIL
    const subject = `Nouvelle inscription newsletter`
    const text = `Nouvelle inscription à la newsletter\n\nEmail: ${email}`
    const html = `
      <h2>Nouvelle inscription à la newsletter</h2>
      <p><strong>Email:</strong> ${email}</p>
    `

    await transporter.sendMail({
      from: `Bilan Plume <${process.env.LEAD_FROM_EMAIL}>`,
      to: toAddress,
      subject,
      text,
      html,
      replyTo: email,
    })

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error("/api/newsletter error", error)
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 })
  }
}


