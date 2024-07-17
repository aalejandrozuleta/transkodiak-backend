import crypto from 'crypto';

export const generateTemCode = async () => {
  const code = crypto.randomBytes(3).toString('hex');
  const expiration = new Date();
  expiration.setSeconds(expiration.getSeconds() + 300);

  return { code };
};
