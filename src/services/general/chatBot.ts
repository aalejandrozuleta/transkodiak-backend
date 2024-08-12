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
  'mercancías',
  'transporte',
  'logística',
  'regulaciones',
  'peajes',
  'ciudades',
  'ganado',
  'misión',
  'visión',
  'descripción general',
  'fecha de creación',
  'colombia',
  'carro',
  'combustible',
  'automóvil',
  'transporte público',
  'transporte privado',
  'carga',
  'peso',
  'flete',
  'promedio',
  'conductores',
  'mantenimiento',
  'seguridad vial',
  'tecnología',
  'innovación',
  'sostenibilidad',
  'infraestructura',
  'rutas',
  'distancia',
  'tiempo de entrega',
  'eficiencia',
  'costos',
  'clientes',
  'servicio',
  'experiencia del cliente',
  'gestión de flotas',
  'GPS',
  'rastreo',
  'entregas',
  'depósitos',
  'almacenes',
  'centros de distribución',
  'logística inversa',
  'flujos de trabajo',
  'optimización',
  'automatización',
  'normativas',
  'cumplimiento',
  'requisitos',
  'adquisiciones',
  'contratos',
  'proveedores',
  'subcontratistas',
  'puntos de carga',
  'estaciones de servicio',
];

const INVALID_THEMES = [
  'religión',
  'violencia',
  'discriminación',
  'países',
  'política',
  'ideologías',
  'guerra',
  'crimen',
  'armas',
  'drogas',
  'sexo',
  'racismo',
  'intolerancia',
  'extremismo',
  'terrorismo',
  'pandemias',
  'enfermedades graves',
  'desastres naturales',
  'temas tabú',
  'ofensas personales',
  'bullying',
  'acoso',
  'privacidad',
  'datos sensibles',
  'información confidencial',
  'masacre',
  'Dios',
  'Jesus',
  'Joab',
  'hoy',
  'futuro',
  'pasado',
];

// Función para verificar si el texto contiene alguno de los temas especificados
const containsTheme = (text: string, themes: string[]): boolean => {
  return themes.some((theme) => new RegExp(`\\b${theme}\\b`, 'i').test(text));
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
    const condition = ' La información brindada debe basarse en Colombia, solo responde la pregunta sin añadidos,no agregues la pregunta en la respuesta';
    // Inicio de la conversación con el modelo de IA generativa
    const chat = model.startChat({
      history: historyChat,
      generationConfig: GENERATION_CONFIG,
    });

    // Envío de la pregunta del usuario y obtención de la respuesta
    const sendQuestion = await chat.sendMessage(chatBot.question + condition);
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