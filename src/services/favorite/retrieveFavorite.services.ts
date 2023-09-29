import { prisma } from "../../server";
import { favoritesManySchema } from "../../schemas/tasks.schemas";
import { TFavoriteResponse } from "../../interfaces/task.interfaces";
import { Favorite } from "@prisma/client";

export const listAllFavoritesService = async(): Promise<TFavoriteResponse[]> => {

    const favorite: Favorite[] = await prisma.favorite.findMany({
        include: {
         task:true
        },
        orderBy: [
            {
                id:"asc"
            },
        ],
    })
    return favoritesManySchema.parse(favorite);
}






