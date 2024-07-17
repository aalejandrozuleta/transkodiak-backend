import nodemailer from 'nodemailer';
import { oauth2Client } from './mailer';
import dotenv from 'dotenv';
dotenv.config();

export const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    type: 'OAuth2',
    user: 'gdgagues@gmail.com', // Reemplaza con tu correo electrónico
    clientId: process.env.MAILER_ID, // ID de cliente
    clientSecret: process.env.MAILER_SECRET, // secreto de cliente
    refreshToken: process.env.REFRESH_TOKEN, // Tu token de actualización
    accessToken: oauth2Client.getAccessToken(),
  },
} as nodemailer.TransportOptions);
