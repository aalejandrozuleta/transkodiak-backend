import { VehicleFindByPlate } from './interface/searchByPlate';
import { FieldPacket } from 'mysql2';
import CreateVehicleDto from '@dto/vehicle/createVehicle';
import createVehicleRepository from '@repositories/vehicle/createVehicle';
import { ERROR_MESSAGE } from './utils/messageError';

export const createVehicleService = async (VehicleData: CreateVehicleDto) => {
  // Verificar si ya existe una empresa con el mismo nombre
  const [existingPlate]: [VehicleFindByPlate[], FieldPacket[]] =
    await createVehicleRepository.findVehicleByPlate(VehicleData);

  const result = existingPlate[0];

  if (result.length > 0) {
    throw new Error(ERROR_MESSAGE.EXISTING_PLATE);
  }

  // Intentar registrar el vehiculo en la base de datos
  return await createVehicleRepository
    .createVehicle(VehicleData)
    .catch((dbError) => {
      console.error(dbError);
      throw new Error(ERROR_MESSAGE.DB_ERROR);
    });
};
