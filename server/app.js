import express from "express";
import cors from "cors";
import studentRoute from "./routes/studentRoutes.js";
import subjectRoute from "./routes/subjectRoutes.js";
import userRoute from "./routes/userRoutes.js";
import cookieParser from "cookie-parser";
import passport from "passport";

// import "./utils/connectdb";
import "./strategies/jwtStrategy.js";
import "./strategies/localStrategy.js";
import "./authenticate.js";

import dotenv from "dotenv";
dotenv.config();
const app = express();
//Middlewares
app.use(cors());
app.use(express.json()); //To access the body method on req object when client sends data
//Mounting the routers on the routes
app.use(cookieParser(process.env.COOKIE_SECRET));

const whitelist = process.env.WHITELISTED_DOMAINS
  ? process.env.WHITELISTED_DOMAINS.split(",")
  : [];

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },

  credentials: true,
};

app.use(cors(corsOptions));

app.use(passport.initialize());

app.use("/users", userRoute);

app.get("/", function (req, res) {
  res.send({ status: "success" });
});

app.use("/", studentRoute);
app.use("/", subjectRoute);

export default app;

//In app.js, basically middlewares are used and express code is written
