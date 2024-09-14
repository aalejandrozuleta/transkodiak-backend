import { statisticsRepository } from '@repositories/general/statistics';

export const statisticsService = async (idUser: string, rolUSer: string) => {
  if (rolUSer === 'Vehicle_Company') {
    const result = await statisticsRepository.getStaticsVehicleCompany(idUser);
    return result[0][0];
  }

  if (rolUSer === 'Transporter') {
    const result = await statisticsRepository.getStaticsTransporter(idUser);
    return result[0][0];
  }

  if (rolUSer === 'Intermediary') {
    const result = await statisticsRepository.getStaticsIntermediary(idUser);
    return result[0][0];
  }
};
