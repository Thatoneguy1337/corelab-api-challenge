import "express-async-errors";
import "reflect-metadata";
import cors from "cors";
import express, { Application } from "express";
import { taskRoutes } from "./routes/tasks.routes";
import { favoriteRoutes } from "./routes/favorite.routes";
export const app: Application = express();


app.use(express.json());
app.use(cors());
app.use("/task", taskRoutes);
app.use("/favorite", favoriteRoutes);










