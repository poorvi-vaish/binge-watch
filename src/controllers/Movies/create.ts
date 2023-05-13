import { Request, Response } from 'express';
import { Movie } from "../../entity/movies";

const createMovie = async (req: Request, res: Response) => {
  const movie = new Movie();
  movie.title = req.body.title;
  movie.description = req.body.description;
  movie.year = req.body.year;
  movie.genre = req.body.genre;
  movie.rating = req.body.rating;
  await movie.save();
  try {
    return res.status(200).json({ data: movie, message: "Movie created successfully" });
  }
  catch (err) {
    return res.status(400).json({ message: err.message });
  }
};

export default createMovie;
