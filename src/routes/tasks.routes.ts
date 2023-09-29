import { Router } from "express";
import { taskSchemaRequest, taskSchemaUpdate } from "../schemas/tasks.schemas";
import { dataValidationMiddleware } from "../middlewares/validateData.middlewares";
import { 
    createTaskController, 
    deleteTaskController, 
    updateTaskController, 
    listAllTaskController } from "../controllers/task";


export const taskRoutes: Router = Router();


taskRoutes.post("",dataValidationMiddleware(taskSchemaRequest), createTaskController);
taskRoutes.delete("/:id",deleteTaskController);
taskRoutes.patch("/:id", dataValidationMiddleware(taskSchemaUpdate), updateTaskController);
taskRoutes.get("",listAllTaskController);





