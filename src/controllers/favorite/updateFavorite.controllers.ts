import { Request, Response } from "express";
import { TFavoriteResponse, TFavoriteUpdate, TTaskRequest } from "../../interfaces/task.interfaces";
import { updateFavoriteService } from "../../services/favorite/updateFavorite.services";

export const updateFavoriteController = async(req:Request, res: Response)=>{
  const taskId:number = Number(req.params.id);
  const updatedValues: TFavoriteUpdate = req.body;
  const task: TTaskRequest = req.body.task;
  delete req.body.task;

  const updatedTask: TFavoriteResponse = await updateFavoriteService(updatedValues,task, taskId) 

  return res.json(updatedTask);

}