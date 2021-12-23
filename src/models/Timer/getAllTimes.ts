import { Request, response } from "express";

import { DataGlobals } from "../../types";
import { Middleware } from "../../objects";
import { data } from "../../data";

const getAllTimes = new Middleware({ 
    callback: (request, response) => {
        response.json(JSON.stringify(data.times));
    }
});

export default getAllTimes;