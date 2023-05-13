import { Request, Response } from "express";
import { Movie } from "../../entity/movies";

const deleteMovie = async (req: Request, res: Response) => {
  const id = req.body.movie_id;
  const movie = await Movie.findOne({where: {id: id}});
  if (movie && movie.id == id) {
    try {
      await movie.remove();
      return res.status(200).json({ message: "Movie deleted successfully" });
    } catch (err) {
      console.log(err);
      return res.status(400).json({ message: err.message });
    }} 
    else {
      res.status(201).json({ message: "Movie not found" });
    }
};

export default deleteMovie;
