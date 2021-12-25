import { Middleware } from "../../objects";
import { data } from "../../data";
import validateRequest from "../../utils/ValidateRequest";
import { DataGlobals } from "../../types";

const middleware = new Middleware({
    validateRequest,
    callback: (
        request, 
        response, 
        { generateID }
    ) => {
        const { 
            day, 
            typeRain, 
            hour, 
            district, 
            city 
        }:DataGlobals = request.body;

        const newTime = {
            id: generateID(),
            day,
            typeRain,
            hour,
            district,
            city
        };

        data.times.push(newTime);

        response.status(200).send("Adicionado com sucesso");
    }
})

const addTime = middleware.create();

export default addTime;