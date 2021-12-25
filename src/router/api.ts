import Express from "express";
import bodyParser from "body-parser";
import { 
    getAllTimes,
    addTime
} from "../models/Timer";

const router = Express.Router();

router.get("/getAllTimes", getAllTimes);

router.post("/addTime", bodyParser.json(), addTime);

export default router;