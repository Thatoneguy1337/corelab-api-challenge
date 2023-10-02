import { z } from "zod";
import { 
    taskSchema, 
    taskSchemaResponse,
    taskSchemaRequest,
    taskSchemaUpdate, 
    taskManySchema,
    favoriteSchema,
    favoriteSchemaResponse,
    favoriteSchemaRequest,
    favoriteSchemaUpdate,
    favoritesManySchema
 } from "../schemas/tasks.schemas";


export type TTask = z.infer<typeof taskSchema>;
export type TTaskRequest = z.infer<typeof taskSchemaRequest>;
export type TTaskResponse = z.infer<typeof taskSchemaResponse>;
export type TTaskUpdate = z.infer<typeof taskSchemaUpdate>;
export type TTaskUpdateRequest = Partial<TTaskUpdate>;
export type TManyTask = z.infer<typeof taskManySchema>;
export type TFavorite = z.infer<typeof favoriteSchema>;
export type TFavoriteResponse = z.infer<typeof favoriteSchemaResponse>;
export type TFavoriteRequest = z.infer<typeof favoriteSchemaRequest>;
export type TFavoriteUpdate = z.infer<typeof favoriteSchemaUpdate>;
export type TFavoriteUpdateRequest = Partial<TFavoriteUpdate>;
export type TManyFavorite = z.infer<typeof favoritesManySchema>;







