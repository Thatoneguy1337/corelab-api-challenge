import { prisma } from "../server";
import { taskManySchema } from "../schemas/tasks.schemas";
import { TTaskResponse } from "../interfaces/task.interfaces";
import { Task } from "@prisma/client";

export const listAllTaskService = async(): Promise<TTaskResponse[]> => {

    const task: Task[] = await prisma.task.findMany({
        orderBy: [
            {
              id: "asc",
            },
          ],
    })
   
   return taskManySchema.parse(task); 
}

