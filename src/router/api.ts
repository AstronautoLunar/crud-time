import Express from "express";
import { getAllTimes } from "../models/Timer";

const router = Express.Router();

router.get("/getAllTimes", getAllTimes);

export default router;