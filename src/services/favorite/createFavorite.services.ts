import { Favorite } from "@prisma/client";
import { TFavoriteRequest, TFavoriteResponse } from "../../interfaces/task.interfaces";
import { prisma } from "../../server";
import { favoriteSchemaResponse } from "../../schemas/tasks.schemas";


export const createFavoriteService = async(taskId:number): Promise<TFavoriteResponse> => {
  
    const favorite: Favorite = await prisma.favorite.create({
        data: {
         taskId: taskId
       
        },
        include:{
            task:true
        },
    });

   return favoriteSchemaResponse.parse(favorite);


}
