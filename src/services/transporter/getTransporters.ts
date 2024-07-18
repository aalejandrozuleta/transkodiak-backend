import { getAllTransporters } from '../../repositories/transporter/getTransporters';

export const getTransporters = async () => {
    return await getAllTransporters();
};