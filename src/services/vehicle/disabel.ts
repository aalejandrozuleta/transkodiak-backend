import { disableVehicleDto } from '@dto/vehicle/disable';
import { disableRepository } from '@repositories/vehicle/disabel';
import { ERROR_MESSAGE } from './utils/messageError';

export const disableService = async (vehicle: disableVehicleDto) => {
  await disableRepository.disableAccount(vehicle).catch((errorBd) => {
    console.error(errorBd);
    throw new Error(ERROR_MESSAGE.INHABILITE_USER);
  });
};
