import cors from 'cors';
import express, { Express, Request, Response } from 'express';
import './config/dotenv';
import { db } from './database/schema/db.models';
import { HttpException } from './lib/http-exception';
import { exceptionHandler } from './middleware/exception-handler';
import { oauthController } from './routers/oauth/oauth.controller';
import { usersController } from './routers/users/users.controller';
import { User } from './database/schema/user.schema';

const PORT = Number.parseInt(process.env.PORT ?? '8000');

const app: Express = express();


app.use(cors({
    origin: "*",
}));

app.use(express.json());


app.get('/', (req: Request, res: Response) => {
    res.json({
        message: 'Hello, world!',
    });
});

app.use('/oauth', oauthController);
app.use('/users', usersController);
app.all('*', (req, res) => {
    throw new HttpException(404, 'Not Found');
});

app.use(exceptionHandler);

if (require.main === module) {
    app.listen(PORT, '0.0.0.0', () => {
        db.connect()
        console.log(`App is running at port: ${PORT}`);
    });
}


declare global {
    namespace Express {
        interface Request {
            user: User
        }
    }
}


export default app;
