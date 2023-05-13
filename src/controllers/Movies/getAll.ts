import { Request, Response } from "express";
import { Movie } from "../../entity/movies";

const getAllMovies = async (req: Request, res: Response) => {
  try {
    const movies = await Movie.find();
    // console.log(movies);
    return res.status(200).json({
      data: movies,
      message: "Movies fetched successfully",
    });
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};

export default getAllMovies;