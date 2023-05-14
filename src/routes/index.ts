import { createMovie, getAllMovies, addAllMovies, updateMovie, deleteMovie } from "../controllers/Movies";
import { watchList } from "../controllers/User/updateWatchList";
import { Router } from 'express';

const routes = Router();
routes.get("/addAll", addAllMovies);
routes.get("/", getAllMovies);
routes.post("/add", createMovie);
routes.put("/update", updateMovie);
routes.delete("/delete", deleteMovie);
routes.get("/watchList", watchList);

export default routes;
