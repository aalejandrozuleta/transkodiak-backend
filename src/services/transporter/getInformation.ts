import { FieldPacket } from "mysql2";
import { getInformationTransporter } from "@interfaces/transpoter/getInformation";
import { getInformationTransporterRepository } from "@repositories/transporter/getInformation";
import { ERROR_MESSAGE } from "./utils/messagesError";

export const getInformationTransporterService = async (idTransporter:string) =>{
  try {
    const [travelResult]: [getInformationTransporter[], FieldPacket[] ] = await  getInformationTransporterRepository.getInformation(idTransporter).catch((error) =>{
      console.error(error);
      throw Error (ERROR_MESSAGE.GET_INFORMATION)
    })
    
    return travelResult
  } catch (error) {
    console.error(error);
    throw Error (ERROR_MESSAGE.DB_ERROR)
  }
}