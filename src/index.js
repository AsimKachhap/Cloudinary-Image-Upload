import express from "express";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";

import userRoutes from "./routes/userRoutes.js";
import connectDb from "./utils/db.js";

const app = express();
dotenv.config();
app.use(morgan("dev"));
app.use(helmet());

const PORT = process.env.PORT;

app.use("/users", userRoutes);

app.listen(PORT, () => {
  connectDb();
  console.log(`Server is up and running at http://localhost:${PORT}`);
});
