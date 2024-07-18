import { Request, Response } from 'express';
import { getTransporters } from '@services/transporter/getTransporters';

export const getTransportersController = async (req: Request, res: Response) => {
    try {
        const transporters = await getTransporters();
        return res.status(200).json(transporters);
    } catch (error) {
        return res.status(500).json({ message: 'Error retrieving transporters', error });
    }
};