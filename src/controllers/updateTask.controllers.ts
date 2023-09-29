import { Request, Response } from "express";
import { TTaskResponse, TTaskUpdate } from "../interfaces/task.interfaces";
import { updateTaskService } from "../services/updateTask.services";

export const updateTaskController = async(req:Request, res: Response)=>{
  const taskId:number = Number(req.params.id);
  const updatedValues: TTaskUpdate = req.body;

  const updatedTask: TTaskResponse = await updateTaskService(updatedValues, taskId) 

  return res.json(updatedTask);

}



