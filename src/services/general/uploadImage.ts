import { uploadImageRepository } from '@repositories/general/uploadImage';
import uploadImageDto from '@dto/general/uploadImage';
import { uploadImageToAzure } from '@config/azureBlobStorage';

export const uploadImageService = async (data: uploadImageDto) => {
  const imgUrl = await uploadImageToAzure(data.img).catch((error) => {
    console.error(error);
    throw new Error('img not uploaded');
  });

  await uploadImageRepository.upload(data.email, imgUrl).catch((error) => {
    console.error(error);
    throw new Error('Error in database');
  });
};
