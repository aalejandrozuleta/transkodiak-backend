export interface createTravelInterface {
    weight: number;
    origin: string;
    destination: string;
    payment: number;
    description: string;
    departureDate: Date;
    deliverDte: Date;
    idTransporter?: string;
    idIntermediary?: string;
}