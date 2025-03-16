
import jwt from 'jsonwebtoken';

export type AuthToken = {
  accessToken: string
}

export async function generateAuthJwtToken(userId: string): Promise<AuthToken> {
  const tokenPayload = {
    sub: userId,
  };

  const secretKey = process.env.JWT_SECRETE_KEY;

  if (!secretKey) {
    throw new Error('Secret Key Required');
  }

  const accessToken = jwt.sign(tokenPayload, secretKey, {
    expiresIn: (process.env.JWT_ACCESS_LIFETIME || '1d') as any,
  });

  return { accessToken };
}