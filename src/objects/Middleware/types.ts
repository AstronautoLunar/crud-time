import { Request, Response } from "express";

interface MiddlewareProps {
    validateRequest?: ValidateRequest;
    callback: CallbackProps
}

type CallbackProps = (
    request: Request, 
    response: Response,
    tools: ToolsProps
) => void;

type ToolsProps = { generateID: () => string };
type ValidateRequest = (value: Request) => boolean;

export type {
    MiddlewareProps,
    CallbackProps,
    ValidateRequest,
    Request,
    Response
}