import ChangePasswordDto from '@dto/vehicleCompany/changePassword';
import ChangePasswordRepository from '@repositories/vehicleCompany/changePassword';

export const changePasswordService = async (user: ChangePasswordDto) => {
  const getPassword = await ChangePasswordRepository.getPassword(user);
};
