import chatBotConfig from '@config/chatBot';
import chatBotDto from '@dto/general/chatBot';

import { GoogleGenerativeAI, Content, Part } from '@google/generative-ai';
import dotenv from 'dotenv';
dotenv.config();

const { START_CHAT, GENERATION_CONFIG } = chatBotConfig;
const API_KEY_GEMINI = process.env.GEMINI_API_KEY;

const genAI = new GoogleGenerativeAI(API_KEY_GEMINI as string);
const model = genAI.getGenerativeModel({ model: 'gemini-pro' });

export const chatBotService = async (chatBot: chatBotDto) => {
  // Transformar los datos de chatMessageInterface a Content
  let historyChat: Content[] = START_CHAT.concat(chatBot.history)
    .map((msg) => {
      // Verificar que 'role' esté definido y sea válido
      if (msg.role && ['user', 'model'].includes(msg.role)) {
        return {
          role: msg.role,
          parts: [{ text: msg.parts }], // Asumiendo que Part tiene una propiedad 'text'
        } as Content; // Aseguramos que el tipo sea Content
      } else {
        console.error('Mensaje inválido en history:', msg);
        return undefined; // Retornamos undefined para eliminar este mensaje
      }
    })
    .filter((msg): msg is Content => msg !== undefined);

  console.log(historyChat);

  const chat = model.startChat({
    history: historyChat,
    generationConfig: GENERATION_CONFIG,
  });

  console.log(chat);

  const sendQuestion = await chat.sendMessage(chatBot.question);
  const response = sendQuestion.response;
  const text = response.text();

  historyChat.push({ role: 'user', parts: [{ text: chatBot.question }] });
  historyChat.push({ role: 'model', parts: [{ text }] });

  return { history: historyChat };
};
