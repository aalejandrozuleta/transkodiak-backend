import { chatMessageInterface } from '@interfaces/general/chatMessageBot';

const GENERATION_CONFIG = {
  stopSequences: ['red'],
  maxOutputTokens: 350,  // Reducimos el número máximo de tokens de salida
  temperature: 0.7,     // Bajamos la temperatura para respuestas más concretas
  topP: 0.9,            // Ajustamos topP para mayor precisión en las respuestas
  topK: 10,             // Bajamos topK para limitar la aleatoriedad
}
const START_CHAT: chatMessageInterface[] = [
  {
    role: 'user',
    parts: `Nombre de la Empresa: Café VIP
  
        Misión: En Café VIP, nos dedicamos a ofrecer a nuestros clientes una experiencia excepcional de café artesanal. Nos esforzamos por proporcionar la más alta calidad en cada taza, desde la selección de granos hasta el proceso de preparación, con un enfoque en la excelencia, la sostenibilidad y la satisfacción del cliente.
        
        Visión: Nos visualizamos como líderes en la industria del café artesanal, reconocidos por nuestra dedicación a la calidad, la innovación y el servicio al cliente. Buscamos expandir nuestra presencia a nivel nacional e internacional, manteniendo siempre nuestros estándares de excelencia y compromiso con la comunidad y el medio ambiente.
        
        Fecha de Creación: Café VIP fue fundado en el año 2015 por un grupo de amantes del café con una pasión compartida por la calidad y la autenticidad en cada taza.
        
        Descripción General:
        Café VIP se distingue por su compromiso con el café de alta calidad y su enfoque en el arte de la preparación. Nuestros granos son cuidadosamente seleccionados de las regiones cafetaleras más prestigiosas del mundo, y nuestro equipo de expertos baristas se dedica a perfeccionar cada técnica para ofrecer una experiencia sensorial única a nuestros clientes.
        
        Nuestro compromiso con la sostenibilidad se refleja en nuestras prácticas comerciales, desde la relación directa con los productores de café hasta la utilización de métodos de cultivo y procesamiento responsables. Además, nos esforzamos por contribuir positivamente a las comunidades locales donde operamos, apoyando iniciativas sociales y ambientales que promuevan el bienestar y el desarrollo sostenible.
        
        Café VIP ofrece una amplia variedad de productos, que van desde café tostado y molido hasta bebidas especializadas y accesorios para café. Nuestras tiendas están diseñadas para brindar un ambiente acogedor y sofisticado, donde los clientes pueden disfrutar de su café favorito mientras se sumergen en una experiencia sensorial única.
        
        Nuestra pasión por el café se refleja en cada aspecto de nuestro negocio, desde la selección de ingredientes hasta la atención al cliente. En Café VIP, estamos comprometidos a superar las expectativas de nuestros clientes y a convertir cada visita en una experiencia memorable.`,
  },
  {
    role: 'model',
    parts: 'Genial empresa!',
  },
];

export = { START_CHAT, GENERATION_CONFIG };
