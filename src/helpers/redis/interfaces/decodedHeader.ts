import { Payload } from '../../interfaces/payload';
import { Header } from './header';

export interface DecodedToken {
  header: Header;
  payload: Payload;
  signature: string;
}
