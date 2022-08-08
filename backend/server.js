import express from "express";
import cors from "cors";
import catRoutes from "./routes/cat.js";
import { populateCats } from "./db-helper.js";

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// populateCats();

app.use("/cat", catRoutes);

app.listen(3001, () => console.log("Server started on port 3001..."));
