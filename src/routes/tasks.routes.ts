import { Router } from "express";
import { taskSchemaRequest, taskSchemaUpdate } from "../schemas/tasks.schemas";
import { dataValidationMiddleware } from "../middlewares/validateData.middlewares";
import { createTaskController, deleteTaskController } from "../controllers";


export const taskRoutes: Router = Router();


taskRoutes.post("",dataValidationMiddleware(taskSchemaRequest), createTaskController)
taskRoutes.delete("/:id",deleteTaskController);





