import { Request } from "express";

import RequestTypesDeleteTime from "./types";

function validateRequest(request: Request) {
    const { id }: RequestTypesDeleteTime = request.body;

    return typeof id === "string";
}

export {
    validateRequest
}