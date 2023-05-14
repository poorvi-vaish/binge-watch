import "reflect-metadata";
import * as express from "express";
import * as cors from "cors";
import { Request, Response, NextFunction } from "express";
import routes from "./routes";
import { AppDataSource } from "../ormconfig";
import { addAllMovies } from "./controllers/Movies";
import addAllUsers from "./controllers/User/allUsers";

const app = express();



const start = async () => {
  AppDataSource.initialize()
    .then(() => {
      app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
        console.error(err.stack);
        res.status(500).json({ error: true, message: "Internal Server Error" });
      });
      app.use(cors({
        origin: "http://localhost:3000",
        credentials: true,
      }));
      app.use(express.urlencoded({ extended: true }));
      app.use(express.json());
      app.use(function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        next();
      });
      app.use("/movies", routes);
      addAllUsers();
      app.listen(8080, function () {
        console.log("server started on port 8080");
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
start();
