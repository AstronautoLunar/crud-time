import { Request } from "express";

import { DataGlobals } from "../../types";

function validateRequest(request: Request): boolean {
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
    const isCityString = typeof city === "string";
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

    return isTodayPassed;
}

export default validateRequest