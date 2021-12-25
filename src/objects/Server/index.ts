import {
    ServerProps,
    Express
} from './types';

class Server {
    private readonly _port: number;
    private readonly _message: string;
    private readonly _app: Express = require('express')()

    constructor({
        port,
        message,
    }: ServerProps) {
        this._port = port;
        this._message = message;
    }

    public get port(): number {
        return this._port;
    }

    public get message(): string {
        return this._message;
    }

    public get app(): any {
        return this._app;
    }

    public execute(): void {
        const {
            app,
            message,
            port
        } = this;

        app.listen(port, () => console.log(`${message}, localhost:${port}`));
    }

    public use(
        route: string,
        callback: any 
    ):void {
        this.app.use(route, callback)
    }
}

export default Server;