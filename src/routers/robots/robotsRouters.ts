import { Router } from "express";
import {
  getRobot,
  getRobots,
} from "../../controllers/robots/robotsControllers.js";

const robotsRouter = Router();

robotsRouter.get("/", getRobots);

robotsRouter.get("/:idRobot", getRobot);

export default robotsRouter;
