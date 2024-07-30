import { chatMessageInterface } from "@interfaces/general/chatMessageBot";

export default class chatBotDto {
  private _history: chatMessageInterface[];
  private _question: string;

  constructor(history: chatMessageInterface[], question: string) {
    this._history = history;
    this._question = question;
  }

  public get history(): chatMessageInterface[] {
    return this._history;
  }

  public get question(): string {
    return this._question;
  }

  public set history(value: chatMessageInterface[]) {
    this._history = value;
  }

  public set question(value: string) {
    this._question = value;
  }
}