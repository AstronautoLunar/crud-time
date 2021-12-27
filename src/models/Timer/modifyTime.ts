import { 
    Request, 
    Response 
} from "express";

import { Middleware } from "../../objects"
import validateRequest from "../../utils/ValidateRequest"
import { DataGlobals } from "../../types";
import { data } from "../../data";

const middleware = new Middleware({
    validateRequest,
    callback: (
        request: Request, 
        response: Response
    ) => {
        try {
            const {
                id,
                day,
                typeRain,
                hour,
                district,
                city
            }:DataGlobals = request.body;
    
            const indexOfTime = data.times.findIndex(item => item.id === id);

            if(indexOfTime > -1) {
                data.times[indexOfTime] = {
                    ...data.times[indexOfTime],
                    day,
                    typeRain,
                    hour,
                    district,
                    city
                };

                response.status(200).send("Alterado com sucesso");
            } else {
                response.status(400).send("Não foi encontrado o tempo para modificação");
            }
            
        } catch(error) {
            if(!error) {
                response.status(200).send("Alterado com sucesso");
            } else {
                response.status(500).send("Error ao modificar o dado de tempo");
            }
        }
    }
});

const modifyTime = middleware.create();

export default modifyTime;