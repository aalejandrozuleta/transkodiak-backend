import { transporter } from '@config/serviceEmail';
import { SentMessageInfo } from 'nodemailer';

export async function sendWelcomeEmail(userEmail: string) {
  const mailOptions = {
    from: 'TranskodiakColombia@gmail.com',
    to: userEmail,
    subject: 'Bienvenido a nuestra página web', // Asunto del correo
    text: 'Gracias por registrarte en nuestra página web. ¡Esperamos que disfrutes de tu estancia!', // Cuerpo del correo
  };

  try {
    const info: SentMessageInfo = await transporter.sendMail(mailOptions);
<<<<<<< HEAD
    console.log('Email enviado: ' + info.messageId);
=======
    console.info('Email enviado: ' + info.messageId);
>>>>>>> main
  } catch (error) {
    console.error('Hubo un error al enviar el correo electrónico: ', error);
  }
}
