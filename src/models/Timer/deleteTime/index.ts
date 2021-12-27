import { 
    Request, 
    Response 
} from "express";

import { validateRequest } from "./utils";
import { Middleware } from "../../../objects";
import RequestTypesDeleteTime from "./types";
import { data } from "../../../data";

const middleware = new Middleware({
    validateRequest,
    callback: (request: Request, response: Response) => {
        const { id }: RequestTypesDeleteTime = request.body;

        const newTime = data.times.filter(item => item.id !== id);

        data.times = newTime;
        
        response.status(200).send("Deletado com sucesso");
    }
});

const deleteTime = middleware.create();

export default deleteTime;