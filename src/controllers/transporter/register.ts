// import RegisterDto from '@dto/transporter/register';
// import { createTransporter } from '@interfaces/transporter/createTransporter';
// import { validationResult } from 'express-validator';
// import { Request, Response } from 'express';
// import { registerService } from '@services/vehicleCompany/register';

// export const registerController = async (req: Request, res: Response) => {
//   // validaciones de los datos
//   const errors = validationResult(req);
//   if (!errors.isEmpty()) {
//     return res
//       .status(400)
//       .json({ errors: errors.array().map((err) => err.msg) });
//   }

//   const userData: createTransporter = req.body;

//   const user = new RegisterDto(
//     userData.name,
//     userData.idNumber,
//     userData.phone,
//     userData.email,
//     userData.license,
//     userData.password,
//   );

//   try {
//     await registerService(user);
//     res.status(201).json({ message: 'Transportador registrado exitosamente' });
//   } catch (error) {
//     // Comprobar si el error es una instancia de Error
//     if (error instanceof Error) {
//       res.status(500).json({
//         error: error.message,
//       });
//     } else {
//       // Si el error no es una instancia de Error, manejar el caso
//       res.status(500).json({
//         error: 'Ocurrió un error desconocido',
//       });
//     }
//   }
// };
