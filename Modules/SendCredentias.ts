import dotenv from "dotenv";
dotenv.config();
import nodemailer from 'nodemailer'


  let transporter = nodemailer.createTransport({
    service: 'gmail',
    host: "gmail",
    port:465,
    secure:true,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSEKEYEMAIL,
    },
  })

   export const sendcrendetias =  async (
    email: string | undefined,
    account_number: string | null,
    account_iban: string | null,
    card_number: string | null,
    numeroAdessao: string | null,
    accessCode: string | null
   ) => {
  
try{
  await transporter.sendMail({
    from: process.env.EMAIL,
    to: email,
    subject: 'Credencias BPA NET',
    text: ``,
    html: `<div style="max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f5f5f5; border-radius: 10px; text-align: center;">
    <h1 style="color: #1674E3;">Dados da Conta BPA NET</h1>
    <p style="margin-bottom: 20px;">Abaixo estão os seus dados bancários</p>
    
    <p><strong>Número da Conta:  </strong>${account_number}</p>
    <p><strong>IBAN da Conta:  </strong> ${account_iban}</p>
    <p><strong>Número do Cartão:  </strong>${card_number}</p>
    
    <p style="margin-top: 20px;">Se precisar de ajuda, entre em contacto com o nosso suporte em <a href="https://www.bpa.ao/particulares/apoio-ao-cliente/" style="color: #1674E3 text-decoration: underline;">Linha de Atendimento do BPA</a>.</p>
    
    <p style="margin-top: 40px;"><strong>Número de Adesão:  </strong>${numeroAdessao}</p>
    <p><strong>Código de Acesso:  </strong> ${accessCode}</p>
    <a href="http://localhost:3000/login" style="display: inline-block; padding: 10px 20px; background-color: #1674E3; color: #ffffff; text-decoration: none; border-radius: 5px; margin-top: 20px;">Login BPA NET</a>
</div>
`})
  }catch(err){
    throw new Error(typeof err === 'string' ? err : 'An unknown error occurred')
  }
}

