import chatBotDto from '@dto/general/chatBot';
import { chatBotInterface } from '@interfaces/general/chatBot';
import { chatBotService } from '@services/general/chatBot';
import { Request, Response } from 'express';

export const chatBotController = async (req: Request, res: Response) => {
  const dates: chatBotInterface = req.body;

  const chat = new chatBotDto(dates.history, dates.question);

  try {
    const updatedHistory = await chatBotService(chat);
    res.status(200).json({ history: updatedHistory });
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({
        error: error.message,
      });
    } else {
      res.status(500).json({
        error: 'Ocurrió un error desconocido',
      });
    }
  }
};
