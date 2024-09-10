import express from "express";
import AppDataSource from "../database";

const app = express();
const PORT = 3000;

try {
  AppDataSource.initialize();

  app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
  });
} catch (error) {
  console.log(error.message);
}

export default app;
