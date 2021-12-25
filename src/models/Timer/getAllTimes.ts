import { Middleware } from "../../objects";
import { data } from "../../data";

const middleware = new Middleware({ 
    callback: (request, response) => {
        response.json(JSON.stringify(data.times));
    }
});

const getAllTimes = middleware.create();

export default getAllTimes;