import Express from "express";
import bodyParser from "body-parser";
import { 
    getAllTimes,
    addTime,
    modifyTime,
    deleteTime
} from "../models/Timer";

const router = Express.Router();

router.get("/getAllTimes", getAllTimes);

router.post("/addTime", bodyParser.json(), addTime);

router.put("/modifyTime", bodyParser.json(),modifyTime);

router.delete("/deleteTime", bodyParser.json(), deleteTime);

export default router;