import { Request, Response } from "express";
import { deleteTaskService } from "../../services/task";

export const deleteTaskController = async (
    req: Request,
    res: Response
  ): Promise<Response> => {
    const taskId: number = Number(req.params.id);
  
    await deleteTaskService(taskId);
  
    return res.status(204).send();
  };

