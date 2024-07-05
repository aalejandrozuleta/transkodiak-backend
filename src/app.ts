import { Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv';
dotenv.config();

// Assuming that these modules have default exports
import app from '@config/serverOptions';
// Import routes
// import userRoutes from "./routes/userRoutes";

// Use routes
//app.use("/api/users", userRoutes);

// Error handling
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  res.status(500).send({ message: err.message });
});
