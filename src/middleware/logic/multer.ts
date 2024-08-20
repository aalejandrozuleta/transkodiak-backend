import multer, { FileFilterCallback } from 'multer';
import { Request } from 'express';

// Configuración del almacenamiento en memoria
const storage = multer.memoryStorage();

// Filtro de archivos (opcional)
const fileFilter = function (
  req: Request,
  file: Express.Multer.File,
  cb: FileFilterCallback,
): void {
  const allowedTypes = /jpeg|jpg|png|gif/;
  const mimeType = allowedTypes.test(file.mimetype);
  const extname = allowedTypes.test(file.originalname.toLowerCase());

  if (mimeType && extname) {
    return cb(null, true);
  }
  cb(new Error('Error: Archivo no soportado'));
};

// Límite de tamaño del archivo (opcional)
const limits = {
  fileSize: 1024 * 1024 * 5, // 5 MB
};

// Middleware de multer
const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: limits,
});

export default upload;
