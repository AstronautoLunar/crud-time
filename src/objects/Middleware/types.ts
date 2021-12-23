import { Request, Response } from "express";

interface MiddlewareProps {
    validateRequest?: ValidateRequest;
    callback: CallbackProps
}

type CallbackProps = (
    request: Request, 
    response: Response
) => void;

type ValidateRequest = (value: Request) => boolean;

export type {
    MiddlewareProps,
    CallbackProps,
    ValidateRequest,
    Request,
    Response
}