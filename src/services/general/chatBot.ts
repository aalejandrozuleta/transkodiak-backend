// Importación de interfaces, configuraciones y dependencias necesarias
import chatBotConfig from '@config/chatBot';
import chatBotDto from '@dto/general/chatBot';
import { GoogleGenerativeAI, Content } from '@google/generative-ai';
import dotenv from 'dotenv';

// Carga de variables de entorno
dotenv.config();

// Extracción de configuraciones y clave API desde las variables de entorno
const { START_CHAT, GENERATION_CONFIG } = chatBotConfig;
const API_KEY_GEMINI = process.env.GEMINI_API_KEY;

// Inicialización del cliente de Google Generative AI con la clave API
const genAI = new GoogleGenerativeAI(API_KEY_GEMINI as string);
const model = genAI.getGenerativeModel({ model: 'gemini-pro' });

// Definición de temas permitidos y no permitidos
const VALID_THEMES = [
  'camiones',
  'mercancías ',
  'transporte ',
  'logística',
  'regulaciones',
  'peajes',
  'ciudades',
  'Ganado',
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
  'religion',
  'violencia',
  'discriminación',
  'Países',
  // Puedes añadir más temas no permitidos aquí
];

// Función para verificar si el texto contiene alguno de los temas especificados
const containsTheme = (text: string, themes: string[]): boolean => {
  return themes.some((theme) =>
    text.toLowerCase().includes(theme.toLowerCase()),
  );
};

// Función para validar si la respuesta generada es válida según los temas permitidos y no permitidos
const isValidResponse = (response: string): boolean => {
  return (
    containsTheme(response, VALID_THEMES) &&
    !containsTheme(response, INVALID_THEMES)
  );
};

// Servicio principal para manejar la interacción con el chatbot
export const chatBotService = async (chatBot: chatBotDto) => {
  // Construcción del historial de chat a partir de START_CHAT y el historial del usuario
  const historyChat: Content[] = START_CHAT.concat(chatBot.history)
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

  // Añadir la pregunta del usuario al historial para generar la respuesta
  historyChat.push({
    role: 'user',
    parts: [{ text: chatBot.question }],
  });

  try {
    // Inicio de la conversación con el modelo de IA generativa
    const chat = model.startChat({
      history: historyChat,
      generationConfig: GENERATION_CONFIG,
    });

    // Envío de la pregunta del usuario y obtención de la respuesta
    const sendQuestion = await chat.sendMessage(chatBot.question);
    const response = sendQuestion.response;
    const text = response.text(); // Esperar el texto

    // Verificación si la respuesta es válida según los temas permitidos
    if (isValidResponse(text)) {
      return { response: text };
    } else {
      throw new Error(
        'La respuesta no está relacionada con los temas permitidos o contiene temas no permitidos.',
      );
    }
  } catch (error) {
    console.error('Error en el envío del mensaje:', error);
    throw error; // Re-lanzar el error para que sea manejado en el controlador
  }
};