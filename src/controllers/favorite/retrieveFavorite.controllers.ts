import { Request, Response } from "express";
import { listAllFavoritesService } from "../../services/favorite";
import { TFavoriteResponse } from "../../interfaces/task.interfaces";


export const listAllFavoriteController = async (
req: Request, res: Response): Promise<Response> => {

const allFavorites: TFavoriteResponse[] = await listAllFavoritesService();

return res.json(allFavorites);
}



