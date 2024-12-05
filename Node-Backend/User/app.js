import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import routes from './routes/api.routes.js';
import morgan from "morgan";
const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.use("/api/users", routes);

export default app;