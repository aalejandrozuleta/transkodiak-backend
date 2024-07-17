import { transporter } from '@config/serviceEmail';
import { SentMessageInfo } from 'nodemailer';

export async function sendCodeForgetPassword(userEmail: string, code: string) {
  const mailOptions = {
    from: 'TranskodiakColombia@gmail.com',
    to: userEmail,
    subject: 'Código de recuperación de contraseña', // Asunto del correo
    text: `Hemos detectado que deseas cambiar la contraseña de tu cuenta. Coloca este código: ${code}`
  };

  try {
    const info: SentMessageInfo = await transporter.sendMail(mailOptions);
    console.log('Email enviado: ' + info.messageId); 
  } catch (error) {
    console.error('Hubo un error al enviar el correo electrónico: ', error);
  }
}
