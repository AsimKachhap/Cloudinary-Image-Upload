import express from "express";
import dotenv from "dotenv";
import helmet from "helmet";

const app = express();
dotenv.config();
app.use(helmet());

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server is up and running at http://localhost:${PORT}`);
});
