export interface createTravelInterface {
    weight: number;
    origin: string;
    destination: string;
    payment: number;
    description: string;
    departureDate: Date;
    deliverDate: Date;
    idTransporter?: string;
    idIntermediary: string;
}