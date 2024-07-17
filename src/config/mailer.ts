import { google } from 'googleapis';
const OAuth2 = google.auth.OAuth2;
import dotenv from 'dotenv';
dotenv.config();

export const oauth2Client = new OAuth2(
  process.env.MAILER_ID, // ID de cliente
  process.env.MAILER_SECRET, // secreto de cliente
  process.env.MAILER_DIRECTION, // URL de redirección
);

oauth2Client.setCredentials({
  refresh_token: process.env.REFRESH_TOKEN, // Tu token de actualización
});
