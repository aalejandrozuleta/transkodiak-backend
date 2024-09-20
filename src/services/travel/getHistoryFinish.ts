import { getHistoryFinishRepository } from "@repositories/travel/getHistoryFinish"
import { ERROR_MESSAGE } from "./utils/errorMessage"
import { FieldPacket, QueryResult } from "mysql2"

export const getHistoryFinishService = async (idIntermediary:number) => {
   const [result]: [QueryResult[], FieldPacket[]] = await getHistoryFinishRepository.getHistory(idIntermediary).catch((error)=>{
    console.error(error)
    throw new Error(ERROR_MESSAGE.DB_ERROR)
  })

  return result[0];
} 