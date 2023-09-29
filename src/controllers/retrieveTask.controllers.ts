import { Request,Response } from "express";
import { listAllTaskService } from "../services/retrieveTask.services";
import { TTaskResponse } from "../interfaces/task.interfaces";

export const listAllTaskController = async (
    req: Request,
    res: Response
  ): Promise<Response> => {
    
   const allTasks: TTaskResponse[] = await listAllTaskService();
  
    return res.json(allTasks);
  };
