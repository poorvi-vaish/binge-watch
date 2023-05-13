import "reflect-metadata";
import * as express from "express";
import * as cors from "cors";
import { Request, Response, NextFunction } from "express";
import routes from "./routes";
import { AppDataSource } from "../ormconfig";

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const start = async () => {
  AppDataSource.initialize()
    .then(() => {
      app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
        console.error(err.stack);
        res.status(500).json({ error: true, message: "Internal Server Error" });
      });
      
      app.use("/movies", routes);
      app.listen(8080, function () {
        console.log("server started on port 8080");
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
start();
