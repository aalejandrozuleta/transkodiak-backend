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

// Use routes
app.use('/api/vehicleCompany', routerVehicleCompany);
app.use('/api/intermediary', routerIntermediary);
app.use('/api/transporter', routerTransporter);
app.use('/api/general', routerGeneral);

// Error handling
// eslint-disable-next-line @typescript-eslint/no-explicit-any

app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.use((err: any, res: Response) => {
  res.status(500).send({ message: err.message });
});
