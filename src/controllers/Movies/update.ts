import { Request, Response } from 'express';
import { Movie } from "../../entity/movies";

const updateMovie = async (req: Request, res: Response) => {
  const id = req.body.movie_id;
  const movie = await Movie.findOne({where: {id}});
  if (movie && movie.id == id) {
    movie.title = req.body.title;
    movie.description = req.body.description;
    movie.year = req.body.year;
    movie.genre = req.body.genre;
    movie.rating = req.body.rating;
    await movie.save();
    try {
      return res.status(200).json({ data: movie ,message: "Movie updated successfully" });
    } catch (err) {
      return res.status(400).json({ message: err.message });
    }
  }
  else {
    return res.status(400).json({ message: "Movie not found" });
  }
};

export default updateMovie;
