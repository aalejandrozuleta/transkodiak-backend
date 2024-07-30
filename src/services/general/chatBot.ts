// archivo: chatBotService.ts

import { chatMessageInterface } from "@interfaces/general/chatMessageBot";
import chatBotConfig from '@config/chatBot';
import chatBotDto from '@dto/general/chatBot';
import { GoogleGenerativeAI, Content } from '@google/generative-ai';
import dotenv from 'dotenv';
dotenv.config();

const { START_CHAT, GENERATION_CONFIG } = chatBotConfig;
const API_KEY_GEMINI = process.env.GEMINI_API_KEY;

const genAI = new GoogleGenerativeAI(API_KEY_GEMINI as string);
const model = genAI.getGenerativeModel({ model: 'gemini-pro' });

// Temas permitidos y no permitidos
const VALID_THEMES = [
  "camiones",
  "mercancías ",
  "transporte ",
  "logística",
  "regulaciones",
  "peajes",
  "ciudades",
  "Ganado",
  'Misión',
  'Vision',
  'Descripción General',
  'Fecha de Creación',
  'Colombia',
  'Carro',
  'Combustible',
  'Automóvil',
  'Transporte público',
  'Transporte privado',
  'carga',
  'peso',
  'flete',
  'promedio',
  'conductores',
  'conductore',
  // Puedes añadir más temas permitidos aquí
];

const INVALID_THEMES = [
  "religion",
  "violencia",
  "discriminación",
  'Países'
  // Puedes añadir más temas no permitidos aquí
];

const containsTheme = (text: string, themes: string[]): boolean => {
  return themes.some(theme => text.toLowerCase().includes(theme.toLowerCase()));
};

const isValidResponse = (response: string): boolean => {
  return containsTheme(response, VALID_THEMES) && !containsTheme(response, INVALID_THEMES);
};

export const chatBotService = async (chatBot: chatBotDto) => {
  // Transformar los datos de chatMessageInterface a Content
  let historyChat: Content[] = START_CHAT.concat(chatBot.history)
    .map((msg) => {
      if (msg.role && ['user', 'model'].includes(msg.role)) {
        return {
          role: msg.role,
          parts: [{ text: msg.parts }],
        } as Content;
      } else {
        console.error('Mensaje inválido en history:', msg);
        return undefined;
      }
    })
    .filter((msg): msg is Content => msg !== undefined);

  // Añadir solo la pregunta del usuario al historial para generar la respuesta
  historyChat.push({
    role: 'user',
    parts: [{ text: chatBot.question }]
  });

  try {
    const chat = model.startChat({
      history: historyChat,
      generationConfig: GENERATION_CONFIG,
    });

    const sendQuestion = await chat.sendMessage(chatBot.question);
    const response = sendQuestion.response;
    const text = response.text(); // Esperar el texto

    if (isValidResponse(text)) {
      return { response: text };
    } else {
      throw new Error('La respuesta no está relacionada con los temas permitidos o contiene temas no permitidos.');
    }

  } catch (error) {
    console.error('Error en el envío del mensaje:', error);
    throw error; // Re-lanzar el error para que sea manejado en el controlador
  }
};
