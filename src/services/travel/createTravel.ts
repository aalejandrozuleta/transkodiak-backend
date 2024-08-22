import CreateTravelDto from '@dto/travel/createTravel';
import createTravelRepository from '@repositories/travel/createTravel';

export const createTravelService = async (
  travelData: CreateTravelDto,
): Promise<void> => {
  try {
    // Llamada al repositorio para crear el viaje
    await createTravelRepository.createTravel(travelData);
  } catch (error) {
    throw new Error(
      'Error al crear el viaje: ' +
        (error instanceof Error ? error.message : 'Error desconocido'),
    );
  }
};
