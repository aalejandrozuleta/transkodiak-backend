import {
  BlobServiceClient,
  ContainerClient,
  BlockBlobClient,
} from '@azure/storage-blob';
import dotenv from 'dotenv';

dotenv.config();

// Configurar conexión con Azure Blob Storage
const AZURE_STORAGE_CONNECTION_STRING = process.env
  .CONNECTION_STRING_AZURE as string;

const blobServiceClient = BlobServiceClient.fromConnectionString(
  AZURE_STORAGE_CONNECTION_STRING,
);
const containerName = 'img';

// Obtener el cliente del contenedor
const getContainerClient = (): ContainerClient => {
  return blobServiceClient.getContainerClient(containerName);
};

// Función para subir una imagen a Azure Blob Storage
export const uploadImageToAzure = async (
  file: Express.Multer.File,
): Promise<string> => {
  try {
    const containerClient = getContainerClient();

    // Configurar el nombre del blob (archivo) en Azure
    const blobName = `${Date.now()}-${file.originalname}`;
    const blockBlobClient: BlockBlobClient =
      containerClient.getBlockBlobClient(blobName);

    // Subir la imagen a Azure Blob Storage
    await blockBlobClient.uploadData(file.buffer, {
      blobHTTPHeaders: { blobContentType: file.mimetype },
    });

    // Obtener la URL del blob
    return blockBlobClient.url;
  } catch (error) {
    console.error('Error al subir la imagen a Azure Blob Storage:', error);
    throw new Error('Error al subir la imagen a Azure');
  }
};

// Función para obtener la URL de la imagen desde Azure Blob Storage
export const getImageUrl = (blobName: string): string => {
  const containerClient = getContainerClient();
  const blockBlobClient: BlockBlobClient =
    containerClient.getBlockBlobClient(blobName);
  return blockBlobClient.url;
};
