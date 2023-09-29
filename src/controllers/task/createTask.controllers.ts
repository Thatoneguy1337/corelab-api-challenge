import { Request, Response } from "express";
import { createTaskService } from "../../services/task";
import { TTaskRequest, TTaskResponse } from "../../interfaces/task.interfaces";

export const createTaskController = async (req: Request, res: Response): Promise<Response> => {
   const taskData: TTaskRequest = req.body;

   const newTask: TTaskResponse = await createTaskService(taskData);

   return res.status(201).json(newTask);

}