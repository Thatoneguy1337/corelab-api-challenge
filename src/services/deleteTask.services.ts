import { prisma } from "../server";

export const deleteTaskService = async (taskId: number): Promise<void> => {
    await prisma.task.delete({
      where: {
        id: taskId,
      },
    });
  
    return;
  };



