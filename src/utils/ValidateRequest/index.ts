import { Request } from "express";

import { DataGlobals } from "../../types";

function validateRequest(request: Request) {
    function returnIsPassed({
        conditional,
        message
    }) {

    }

    const { 
        id, 
        day, 
        typeRain,
        hour,
        district,
        city
    }: DataGlobals = request.body;

    const isIdString = typeof id === "string";
    const isDayString = typeof day === "string";
    const isTypeRainString = typeof typeRain === "string";
    const isHourNumber = typeof hour === "number";
    const isDistrictString = typeof district === "string";
    const isCityString = typeof district === "string";
    const isTodayPassed = 
        isIdString 
        && 
        isDayString 
        &&
        isTypeRainString
        &&
        isHourNumber
        &&
        isDistrictString
        &&
        isCityString;

    
}

export default validateRequest