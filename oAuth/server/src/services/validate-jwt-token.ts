import jwt from 'jsonwebtoken';

export function validateJwtToken<T extends jwt.JwtPayload>(
  token: string,
): T | null {
  const secretKey = process.env.JWT_SECRETE_KEY;
  if (!secretKey) {
    throw new Error('Secret Key Required');
  }
  try {
    const decoded = jwt.verify(token, secretKey);

    return decoded as T;
  } catch (error) {
    return null;
  }
}
