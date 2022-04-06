import mongoose from "mongoose";
import dotenv from "dotenv";

import app from "./app.js";
dotenv.config({ path: "./config.env" });

const PORT = process.env.PORT || 3000;

mongoose
  .connect(
    "mongodb+srv://farzad:farzad@cluster0.mmp8d.mongodb.net/CMS?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server Running on Port: http://localhost:${PORT}`)
    )
  );
