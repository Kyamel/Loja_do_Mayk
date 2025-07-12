// Desenvolvido por [Danilo Da Silva Batista] - https://github.com/kovarike
// Este código foi criado/alterado por mim.

import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { emailSchema, emailSchemaPay } from "@/lib/mail";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const validationPay = emailSchemaPay.safeParse(body);

    if (!validationPay.success) {
      return NextResponse.json({ error: "Dados inválidos", details: validationPay.error?.format() }, { status: 400 });
    }

    const { email: EmailPay, subject: SubjectPay, cep, cidade, estado, rua, complemento, name: NamePay, formaPagamento } = validationPay.data;

    //sanitize Email Pay

    const endereço = [{
      cep,
      cidade,
      estado,
      rua,
      complemento
    }]

    const sanitizedNamePay = NamePay.replace(/</g, "&lt;").replace(/>/g, "&gt;");
    const sanitizedMessagePay = endereço.map(obj => ({
      cep: String(obj.cep).replace(/</g, "&lt;").replace(/>/g, "&gt;"),
      cidade: String(obj.cidade).replace(/</g, "&lt;").replace(/>/g, "&gt;"),
      estado: String(obj.estado).replace(/</g, "&lt;").replace(/>/g, "&gt;"),
      rua: String(obj.rua).replace(/</g, "&lt;").replace(/>/g, "&gt;"),
      complemento: String(obj.complemento).replace(/</g, "&lt;").replace(/>/g, "&gt;")
    }));
    const sanitizedEmailPay = EmailPay.replace(/</g, "&lt;").replace(/>/g, "&gt;");
    const sanitizedSubjectPay = SubjectPay?.replace(/</g, "&lt;").replace(/>/g, "&gt;");
    const sanitizedPay = formaPagamento.replace(/</g, "&lt;").replace(/>/g, "&gt;");

    // Configuração do transportador com TLS
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      // host: "smtp.ethereal.email",
      // port: 587,
      secure: true, // SSL
      auth: {
        user: process.env.EMAIL,
        pass: process.env.TOKEN,
      },
      tls: {
        rejectUnauthorized: true,
      },
    });


    //---------------------------
    // Envio de email de pagamento
    //---------------------------

    const htmlEndereco = sanitizedMessagePay.map(endereco => `
      <div style="background: #fcf5eb; padding: 15px; border: 1px solid #ddd; border-radius: 5px; font-size: 15px; margin-bottom: 10px;">
        <p style="margin: 5px 0;"><strong>Rua:</strong> ${endereco.rua}</p>
        <p style="margin: 5px 0;"><strong>Complemento:</strong> ${endereco.complemento}</p>
        <p style="margin: 5px 0;"><strong>Cidade:</strong> ${endereco.cidade}</p>
        <p style="margin: 5px 0;"><strong>Estado:</strong> ${endereco.estado}</p>
        <p style="margin: 5px 0;"><strong>CEP:</strong> ${endereco.cep}</p>
      </div>
    `).join('');

    const htmlPay = `
      <div style="font-family: Arial, sans-serif; background-color: #f7f7f7; padding: 40px 20px;">
        <div style="max-width: 600px; margin: auto; background: #ffffff; border-radius: 10px; box-shadow: 0 2px 8px rgba(0,0,0,0.05); overflow: hidden;">
          <div style="background-color: #e3b04b; padding: 20px; text-align: center;">
            <h2 style="color: #fff; margin: 0;">MaykShop</h2>
            <p style="color: #fff; margin: 5px 0 0; font-size: 14px;">Confirmação de Pedido</p>
          </div>
    
          <div style="padding: 30px;">
            <p style="color: #333; font-size: 16px; margin-bottom: 20px;">
              Olá, <strong>${sanitizedNamePay}</strong>! Recebemos seu pedido com sucesso.
            </p>
    
            <p style="font-size: 16px; margin: 10px 0;">
              <strong>Produto(s):</strong> ${sanitizedSubjectPay}
            </p>
    
            <p style="font-size: 16px; margin: 10px 0;">
              <strong>Forma de Pagamento:</strong> ${sanitizedPay}
            </p>
    
            <p style="font-size: 16px; margin: 10px 0;">
              <strong>Email de contato:</strong> 
              <span style="color: #5bc0de;">${sanitizedEmailPay}</span>
            </p>
    
            <p style="font-size: 16px; margin: 20px 0 10px;">
              <strong>Endereço de Entrega:</strong>
            </p>
    
            ${htmlEndereco}
    
            <hr style="margin: 30px 0; border: none; border-top: 1px solid #eee;" />
    
            <p style="font-size: 15px; color: #777;">
              Agradecemos pela sua preferência. Qualquer dúvida, estamos à disposição!
            </p>
            <p style="font-size: 15px; color: #777;">
              <strong>MaykShop</strong><br />
              Localização: Rua Trinta e Seis, 115 – UFOP-ICEA, Cruzeiro Celeste
            </p>
          </div>
    
          <div style="background-color: #fafafa; text-align: center; padding: 15px; font-size: 13px; color: #aaa;">
            © ${new Date().getFullYear()} MaykShop. Todos os direitos reservados.
          </div>
        </div>
      </div>
    `;

    const mailPay = {
      from: `"${sanitizedNamePay} efetuou a compra de: ${sanitizedSubjectPay}" <${process.env.EMAIL}>`,
      to: `${process.env.EMAIL}, ${sanitizedEmailPay}`,
      subject: sanitizedSubjectPay,
      html: htmlPay,
      replyTo: `${sanitizedEmailPay}, ${process.env.EMAIL}`,
    };

    await transporter.sendMail(mailPay);

    return NextResponse.json({ success: true, message: "Email enviado com sucesso" }, { status: 200 });
  } catch (error) {
    console.error("Erro ao enviar email:", error);
    return NextResponse.json({ error: "Falha ao enviar email" }, { status: 500 });
  }
}


