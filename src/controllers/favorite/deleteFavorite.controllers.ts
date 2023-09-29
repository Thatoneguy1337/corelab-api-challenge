import {Request, Response} from "express";
import { deleteFavoriteService } from "../../services/favorite";

export const deleteFavoriteController = async(
    req: Request,
    res: Response
): Promise<Response> => {
    const favoriteId: number = Number(req.params.id);

    await deleteFavoriteService(favoriteId);

    return res.status(204).send();

}