import { TFavoriteResponse, TFavoriteUpdateRequest } from "../../interfaces/task.interfaces";
import { prisma } from "../../server";
import { favoriteSchemaResponse,favoriteSchemaUpdate } from "../../schemas/tasks.schemas";
import { Favorite } from "@prisma/client";


export const updateFavoriteService = async(data:any, task:any, favoriteId:number):Promise<TFavoriteResponse>=>{
    const updatedFavorite: Favorite = await prisma.favorite.update({
        where: { id: favoriteId },
        data:{
            ...data,
        task: {
            update:{
              
               ...task 

            },
           }
,        },
    });
    
      return favoriteSchemaResponse.parse(updatedFavorite);
}