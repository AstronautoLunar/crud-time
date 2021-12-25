import { Express, Request, Response } from 'express';

interface ServerProps {
    port: number;
    message: string;
}

export {
    ServerProps,
    Express
};