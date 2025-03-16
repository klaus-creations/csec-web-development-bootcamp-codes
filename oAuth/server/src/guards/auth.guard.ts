import { UserRole } from '@/database/schema/user.schema';
import { ErrorType, HttpException } from '@/lib/http-exception';
import { getOneUser } from '@/routers/users/users.service';
import { validateJwtToken } from '@/services/validate-jwt-token';
import { NextFunction, Request, Response } from 'express';

export function authGuard(option?: { roles?: UserRole[]; }) {
    return (req: Request, res: Response, next: NextFunction) => {
        async function validate() {
            const authorizations = req.headers.authorization?.split(' ') ?? [];
            const accessToken = authorizations.length >= 2 ? authorizations[1] : null;

            if (!accessToken) {
                throw new HttpException(
                    401,
                    'Unauthorized: Not Access Token',
                    ErrorType.NOT_ACCESS_TOKEN,
                );
            }

            const payload = accessToken
                ? validateJwtToken<{ sub: string }>(accessToken)
                : null;

            if (!payload?.sub) {
                throw new HttpException(
                    401,
                    'Unauthorized: Access Token Expired',
                    ErrorType.EXPIRED_TOKEN,
                );
            }

            const user = payload?.sub ? await getOneUser(payload.sub) : null;

            if (!user) {
                throw new HttpException(
                    401,
                    'Unauthorized: Invalid Access Token',
                    ErrorType.INVALID_TOKEN,
                );
            }

            if (user && option?.roles && !option.roles.includes(user?.role)) {
                throw new HttpException(
                    403,
                    'Permission Denied',
                    ErrorType.PERMISSION_DENIED,
                );
            }

            req.user = user;
            next();
        }
        return Promise.resolve(validate()).catch(next);
    };
}
