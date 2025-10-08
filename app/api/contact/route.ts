import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

type Payload = {
  prenom: string
  nom: string
  email: string
  telephone?: string
  profession?: string
  nbBilans?: string
  disponibilite?: string
  message?: string
}

export async function POST(request: Request) {
  try {
    const data = (await request.json()) as Partial<Payload>

    if (!data.prenom || !data.nom || !data.email) {
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

    const toAddress = process.env.LEAD_TO_EMAIL
    const subject = `Nouvelle demande d'essai – ${data.prenom} ${data.nom}`
    const text = `Nouvelle demande d'essai gratuit\n\nNom: ${data.nom}\nPrénom: ${data.prenom}\nEmail: ${data.email}\nProfession: ${data.profession || "-"}\nNombre de bilans/mois: ${data.nbBilans || "-"}\nDisponibilité: ${data.disponibilite || "-"}\n\nMessage:\n${data.message || "(aucun)"}`
    const html = `
      <h2>Nouvelle demande d'essai gratuit</h2>
      <p><strong>Nom:</strong> ${data.nom}</p>
      <p><strong>Prénom:</strong> ${data.prenom}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Profession:</strong> ${data.profession || "-"}</p>
      <p><strong>Nombre de bilans/mois:</strong> ${data.nbBilans || "-"}</p>
      <p><strong>Disponibilité:</strong> ${data.disponibilite || "-"}</p>
      <p><strong>Message:</strong><br/>${(data.message || "(aucun)").replace(/\n/g, "<br/>")}</p>
    `

    await transporter.sendMail({
      from: `Bilan Plume <${process.env.LEAD_FROM_EMAIL}>`,
      to: toAddress,
      subject,
      text,
      html,
      replyTo: data.email,
    })

    // Send confirmation email to the user (does not block success)
    try {
      const userSubject = "Merci — vous êtes sur liste d'attente"
      const userText = `Bonjour ${data.prenom},\n\nMerci pour votre demande d'accès à Bilan Plume.\n\nVous êtes bien inscrit·e sur liste d'attente. Nous vous recontacterons très rapidement avec la suite.\n\n— L'équipe Bilan Plume`
      const userHtml = `
        <p>Bonjour ${data.prenom},</p>
        <p>Merci pour votre demande d’accès à <strong>Bilan Plume</strong>.</p>
        <p><strong>En raison d’un très grand nombre de demandes, nous avons mis en place une liste d’attente afin de préserver la qualité de l’expérience pour chacun·e.</strong><br/>
        Vous êtes bien inscrit·e sur cette liste d’attente et nous vous recontacterons très prochainement avec la suite.</p>
        <p>À très bientôt,<br/>
        — L’équipe Bilan Plume</p>
      `

      await transporter.sendMail({
        from: `Bilan Plume <${process.env.LEAD_FROM_EMAIL}>`,
        to: data.email!,
        subject: userSubject,
        text: userText,
        html: userHtml,
        replyTo: process.env.LEAD_FROM_EMAIL,
      })
    } catch (e) {
      console.error("/api/contact confirmation email error", e)
    }

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error("/api/contact error", error)
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 })
  }
}
