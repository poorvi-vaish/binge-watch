import { createMovie, getAllMovies, updateMovie, deleteMovie } from "../controllers/Movies";
import { watchedMovies, watchList } from "../controllers/User/updateWatchList";
import { Router } from 'express';

const routes = Router();
routes.get("/", getAllMovies);
routes.post("/add", createMovie);
routes.put("/update", updateMovie);
routes.delete("/delete", deleteMovie);
routes.post("/watchedMovies", watchedMovies);
routes.post("/watchList", watchList);

export default routes;
