import { Response } from 'express';
import dotenv from 'dotenv';
dotenv.config();

// Assuming that these modules have default exports
import app from '@config/serverOptions';

// Import routes
import { routerVehicleCompany } from '@routes/vehicleCompanyRoutes';
import { routerIntermediary } from '@routes/IntermediaryRoutes';
import { routerTransporter } from '@routes/transporterRoutes';
import { routerGeneral } from '@routes/generalRoutes';
import { routerVehicle } from '@routes/vehicleRoutes';
import { routerTravel } from '@routes/travelRoutes';

// Use routes
app.use('/api/vehicleCompany', routerVehicleCompany);
app.use('/api/intermediary', routerIntermediary);
app.use('/api/transporter', routerTransporter);
app.use('/api/general', routerGeneral);
app.use('/api/vehicle', routerVehicle);
app.use('/api/travel', routerTravel);

// Error handling
// eslint-disable-next-line @typescript-eslint/no-explicit-any
app.use((err: any, res: Response) => {
  res.status(500).send({ message: err.message });
});
