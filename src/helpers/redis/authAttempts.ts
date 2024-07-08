// helpers/authAttempts.ts
import { client } from '@config/redis';

const MAX_ATTEMPTS = 4;
const BLOCK_TIME = 15 * 60; // Tiempo de bloqueo en segundos (ej: 15 minutos)

export const getFailedAttempts = async (email: string): Promise<number> => {
  const attempts = await client.get(`failed_attempts:${email}`);
  return attempts ? parseInt(attempts, 10) : 0;
};

export const incrementFailedAttempts = async (email: string): Promise<void> => {
  const attempts = await getFailedAttempts(email);
  await client.set(`failed_attempts:${email}`, attempts + 1, { EX: BLOCK_TIME });
};

export const resetFailedAttempts = async (email: string): Promise<void> => {
  await client.del(`failed_attempts:${email}`);
};

export const isBlocked = async (email: string): Promise<boolean> => {
  const attempts = await getFailedAttempts(email);
  return attempts >= MAX_ATTEMPTS;
};
