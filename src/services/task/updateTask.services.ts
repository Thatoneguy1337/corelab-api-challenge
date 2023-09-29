import { TTaskResponse, TTaskUpdateRequest } from "../../interfaces/task.interfaces";
import { prisma } from "../../server";
import { taskSchemaResponse,taskSchemaUpdate } from "../../schemas/tasks.schemas";
import { Task } from "@prisma/client";


export const updateTaskService = async(data:any, taskId:number):Promise<TTaskResponse>=>{
    const updatedAd: Task = await prisma.task.update({
        where: { id: taskId },
        data:{...data},
    });
    
      return taskSchemaResponse.parse(updatedAd);
}




