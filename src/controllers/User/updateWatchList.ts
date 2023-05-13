import { Request, Response } from 'express';
import { User } from "../../entity/user";

export const watchedMovies = async (req: Request, res: Response) => {
  const { id } = req.body.user_id; // id of the user
  try {
    const user = await User.findOneBy(id);
    if (user && user.id == id) {
      user.watchedMovies.push(req.body.watchedMovies); // array of movies watched by the user
    }
    await user.save();
    const watchedMovies = user.watchedMovies;
    res.json({ data: watchedMovies, message: "Watched movies fetched successfully" });
  } catch (err) {
    res.json({
      error: err.message,
      message: "Error",
    });
  }
};

export const watchList = async (req: Request, res: Response) => {
  try {
    const { id } = req.body.user_id; // id of the user
    const user = await User.findOneBy(id);
    if (user && user.id == id) {
      user.watchList.push(req.body.watchList) // array of movies to watch by the user
    }
    await user.save();
    const watchList = user.watchList;
    res.json({ data: watchList, message: "Watchlist fetched successfully" });
  } catch (err) {
    res.json({
      error: err.message,
      message: "Error",
    });
  }
}
