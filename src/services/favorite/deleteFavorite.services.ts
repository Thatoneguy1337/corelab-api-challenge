import { prisma } from "../../server";

export const deleteFavoriteService = async (favoriteId:number): Promise<void> => {
    await prisma.favorite.delete({
        where:{
            id:favoriteId
        },
    });
    return;
}





