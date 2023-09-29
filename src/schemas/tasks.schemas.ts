import { z } from 'zod';




const taskSchema = z.object({
  id: z.number(),
  title: z.string(),
  description: z.string().nullable(),
  color: z.enum([
    "White",  
    "LightBlue",
    "LightGreen",
    "LightYellow",
    "LightPink",
    "DarkPink",
    "Blue",
    "Pink",
    "Yellow",
    "SalmonPink",
    "Grey",
    "DarkGrey",
    "LightBrown"]).default('White')
});

const taskSchemaResponse = taskSchema;


const taskSchemaRequest = taskSchema.omit({
    id:true
})

const taskSchemaUpdate = taskSchemaResponse
.omit({
  id: true
})
.deepPartial();

const  taskManySchema = z.array(taskSchema);



const favoriteSchema = z.object({
  id: z.number(),
  taskId: z.number(),
  task: taskSchema, 
});

const favoriteSchemaResponse = favoriteSchema;

const favoriteSchemaRequest = favoriteSchema.omit({
    id:true
})

const favoriteSchemaUpdate = favoriteSchema.omit({
  id:true,
  taskId: true,
})

const favoritesManySchema = z.array(favoriteSchema);

export { 
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
     };