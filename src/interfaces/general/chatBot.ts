import { chatMessageInterface } from './chatMessageBot';

export interface chatBotInterface {
  question: string;
  history: chatMessageInterface[];
}
