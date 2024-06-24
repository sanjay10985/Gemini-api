import express from "express";
import geminiRoutes from "./routes/geminiRoutes.js";
import dotenv from "dotenv";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());
// app.use(dotenv());

app.use("/api/v1", geminiRoutes);

app.listen(3000, () => console.log("connected"));
