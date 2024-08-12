import { chatMessageInterface } from '@interfaces/general/chatMessageBot';

const GENERATION_CONFIG = {
  stopSequences: [],
  maxOutputTokens: 100, // Limitar tokens para respuestas más concisas
  temperature: 0.3, // Ajustar para respuestas balanceadas entre creatividad y coherencia
  topP: 0.8, // Mantener un buen nivel de precisión en respuestas
  topK: 4, // Limitar la aleatoriedad para mayor precisión
};

const START_CHAT: chatMessageInterface[] = [
  {
    role: 'user',
    parts: `
    **Nombre de la Empresa:** Transkodiak

    **Cómo crear un transportador:**
    1. Regístrate como empresa vehicular o inicia sesión.
    2. Dirígete al menú y selecciona "Transportadores".
    3. Completa la información requerida del transportador.
    4. Guarda los datos del transportador.
    5. Visualiza el transportador en la tabla de usuarios.

    **Cómo registrarme como empresa vehicular:**
    1. Ingresa a registrarte en la parte superior izquierda.
    2. Selecciona la opción "Empresa Vehicular".
    3. Ingresa los datos solicitados.
    4. Guarda los datos ingresados.

    **Cómo registrarme como empresa intermediaria:**
    1. Ingresa a registrarte en la parte superior izquierda.
    2. Selecciona la opción "Empresa Intermediaria".
    3. Ingresa los datos solicitados.
    4. Guarda los datos ingresados.
    `,
  },
  {
    role: 'model',
    parts: '¡Genial, empresa Transkodiak!',
  },
];

export = { START_CHAT, GENERATION_CONFIG };
