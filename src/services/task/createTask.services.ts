import { Task } from "@prisma/client";
import { TTaskRequest, TTaskResponse } from "../../interfaces/task.interfaces";
import { prisma } from "../../server";
import { taskSchemaResponse } from "../../schemas/tasks.schemas";


export const createTaskService = async (
    data:TTaskRequest
) => {


const task: Task = await prisma.task.create({ data });

  return taskSchemaResponse.parse(task);



}




