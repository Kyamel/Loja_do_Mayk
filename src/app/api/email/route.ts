// Desenvolvido por [Danilo Da Silva Batista] - https://github.com/kovarike
// Este código foi criado/alterado por mim.

import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { emailSchema } from "@/lib/mail";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const validation = emailSchema.safeParse(body);

    if (!validation.success) {
      return NextResponse.json({ error: "Dados inválidos", details: validation.error.format() }, { status: 400 });
    }

    const { email, subject, message, name } = validation.data;

    // Configuração do transportador com TLS
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      // host: "smtp.ethereal.email",
      // port: 587,
      // secure: false,
      auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD,
      },
      tls: {
        rejectUnauthorized: true,
      },
    });

    const sanitizedName = name.replace(/</g, "&lt;").replace(/>/g, "&gt;");
    const sanitizedMessage = message.replace(/</g, "&lt;").replace(/>/g, "&gt;");
    const sanitizedEmail = email.replace(/</g, "&lt;").replace(/>/g, "&gt;");
    const sanitizedSubject = subject.replace(/</g, "&lt;").replace(/>/g, "&gt;");

    const html = `
    <div style="font-family: Arial, sans-serif; line-height: 1.6; background-color: #fcf5eb; padding: 20px; border-radius: 8px; max-width: 600px; margin: auto;">
      <p style="color: #000; font-size: 16px; margin-bottom: 20px;">O Cliente <strong style="font-size: 16px;">${sanitizedName}</strong> entrou em contato solicitando nossos serviços!</p>
      <p style="font-size: 16px; margin-bottom: 10px;"><strong style="font-size: 16px;">Email do Cliente:</strong> <span style="color: #5bc0de;">${sanitizedEmail}</span></p>
      <p style="font-size: 16px; margin-bottom: 10px;"><strong style="font-size: 16px;">Assunto:</strong> <span style="color: #000;">${sanitizedSubject}</span></p>
      <p style="font-size: 16px; margin-bottom: 10px;"><strong style="font-size: 16px;">Mensagem:</strong></p>
      <pre style="white-space: pre-wrap; border: 1px solid #ddd; padding: 15px; background-color: #fcf5eb; border-radius: 4px; font-size: 16px;">
      ${sanitizedMessage}
      </pre>
      <div style="background-color: #fcf5eb; padding: 20px; border-radius: 8px; margin-top: 20px;">
      <p style="font-size: 16px;"><strong style="font-size: 16px;">Focus Consultaria JR / Diretoria de Projetos.</strong></p>
      <p style="font-size: 16px;"><strong style="font-size: 16px;">Localização: Rua Trinta e Seis 115 - UFOP-ICEA Cruzeiro Celeste.</strong></p>
      </div>
    </div> 
    `;

    const mail = {
      from: `"Solicitação de Serviço de: ${sanitizedName}" <${process.env.EMAIL}>`,
      to: `${process.env.EMAIL}, ${process.env.F_EMAIL}`,
      subject: sanitizedSubject,
      html: html,
      replyTo: `${sanitizedEmail}, ${process.env.F_EMAIL}`,
    };

    await transporter.sendMail(mail);

    return NextResponse.json({ success: true, message: "Email enviado com sucesso" }, { status: 200 });
  } catch (error) {
    console.error("Erro ao enviar email:", error);
    return NextResponse.json({ error: "Falha ao enviar email" }, { status: 500 });
  }
}


