import * as express from 'express';
import * as graphqlHTTP from 'express-graphql';
import { resolve as resolvePath } from 'path';

import { NextFunction, Request, Response } from 'express';
import { ResponseStatusCodesEnum } from './constants';
import { graphQLResolvers, graphQLRootSchema } from './graphql';
import { notFoundRouter } from './routers';

class App {
    public readonly app: express.Application = express();

    constructor() {
        (global as any).appRoot = resolvePath(__dirname, '../');

        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: true}));
        this.app.use(express.static(resolvePath((global as any).appRoot, 'static')));
        this.mountRoutes();

        this.app.use(this.customErrorHandler);
        this.app.use(this.clientErrorHandler);
    }

    private mountRoutes(): void {
        this.app.use('/graphql', graphqlHTTP({
            schema: graphQLRootSchema,
            rootValue: graphQLResolvers,
            graphiql: true
        }));
        this.app.use('*', notFoundRouter);
    }

    private customErrorHandler(err: any, req: Request, res: Response, next: NextFunction): void {
        if (err.parent) {
            err.message = err.parent.sqlMessage;
        }

        res
            .status(err.status || ResponseStatusCodesEnum.SERVER_ERROR)
            .json({
                error: {
                    message: err.message || 'Unknown Error',
                    code: err.code,
                    data: err.data
                }
            });
    }

    private clientErrorHandler(err: any, req: Request, res: Response, next: NextFunction): void {
        if (req.xhr) {
            res
                .status(ResponseStatusCodesEnum.SERVER_ERROR)
                .send({
                    error: {
                        message: 'Request dependent error!',
                        code: err.code,
                        data: err.data
                    }
                });
        } else {
            next(err);
        }
    }
}

export const app = new App().app;
