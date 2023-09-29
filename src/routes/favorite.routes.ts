import { Router } from "express";
import { favoriteSchemaRequest, favoriteSchemaResponse } from "../schemas/tasks.schemas";
import { createFavoriteController, listAllFavoriteController } from "../controllers/favorite";


export const favoriteRoutes: Router = Router();


favoriteRoutes.post("/:id",createFavoriteController);
favoriteRoutes.get("",listAllFavoriteController);









