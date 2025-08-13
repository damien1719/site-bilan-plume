import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

type Payload = {
  prenom: string
  nom: string
  email: string
  telephone: string
  profession?: string
  nbBilans?: string
  disponibilite?: string
  message?: string
}

export async function POST(request: Request) {
  try {
    const data = (await request.json()) as Partial<Payload>

    if (!data.prenom || !data.nom || !data.email || !data.telephone) {
      return NextResponse.json({ error: "Champs requis manquants" }, { status: 400 })
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

    const toAddress = "no-reply@bilan-plume.fr"
    const subject = `Nouvelle demande d'essai – ${data.prenom} ${data.nom}`
    const text = `Nouvelle demande d'essai gratuit\n\nNom: ${data.nom}\nPrénom: ${data.prenom}\nEmail: ${data.email}\nTéléphone: ${data.telephone}\nProfession: ${data.profession || "-"}\nNombre de bilans/mois: ${data.nbBilans || "-"}\nDisponibilité: ${data.disponibilite || "-"}\n\nMessage:\n${data.message || "(aucun)"}`
    const html = `
      <h2>Nouvelle demande d'essai gratuit</h2>
      <p><strong>Nom:</strong> ${data.nom}</p>
      <p><strong>Prénom:</strong> ${data.prenom}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Téléphone:</strong> ${data.telephone}</p>
      <p><strong>Profession:</strong> ${data.profession || "-"}</p>
      <p><strong>Nombre de bilans/mois:</strong> ${data.nbBilans || "-"}</p>
      <p><strong>Disponibilité:</strong> ${data.disponibilite || "-"}</p>
      <p><strong>Message:</strong><br/>${(data.message || "(aucun)").replace(/\n/g, "<br/>")}</p>
    `

    await transporter.sendMail({
      from: `Bilan Plume <no-reply@bilan-plume.fr>`,
      to: toAddress,
      subject,
      text,
      html,
      replyTo: data.email,
    })

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error("/api/contact error", error)
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 })
  }
}


