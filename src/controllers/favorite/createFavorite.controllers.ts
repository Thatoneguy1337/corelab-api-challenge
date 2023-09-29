import { Request, Response } from "express";
import { TFavoriteResponse } from "../../interfaces/task.interfaces";
import { favoriteSchemaResponse } from "../../schemas/tasks.schemas";
import { createFavoriteService } from "../../services/favorite";


export const createFavoriteController = async(req:Request, res:Response): Promise<Response> => {

      const taskId: number = Number(req.params.id);

     const newFavoriteTask: TFavoriteResponse = await createFavoriteService(taskId);
     
     return res.status(201).json(newFavoriteTask);
 }




