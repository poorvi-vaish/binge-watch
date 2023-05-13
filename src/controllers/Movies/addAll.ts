import getMovies from "../../utils/getMovies";
import { Request, Response } from "express";
import { Movie } from "../../entity/movies";

const addAllMovies = async (req: Request, res: Response) => {
  const moviesList = await getMovies();

  moviesList.forEach(async (item: any) => {
    const movie = new Movie();
    movie.title = item.title;
    movie.description = item.description;
    movie.year = item.year;
    movie.genre = item.genre;
    movie.rating = item.rating;
    await movie.save();
  });
  try {
    const movies = await Movie.find();
    // console.log(movies);
    return res.status(200).json({
      message: "Movies added successfully",
    });
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};

export default addAllMovies;
