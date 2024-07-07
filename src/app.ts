import { Request, Response } from 'express';
import dotenv from 'dotenv';
dotenv.config();

// Assuming that these modules have default exports
import app from '@config/serverOptions';

// Import routes
import { routerVehicleCompany } from '@routes/vehicleCompanyRoutes';

// Use routes
app.use('/api/vehicleCompany', routerVehicleCompany);
// Error handling
app.use((err: Error, req: Request, res: Response) => {
  res.status(500).send({ message: err.message });
});
