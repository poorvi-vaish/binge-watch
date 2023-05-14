import { Request, Response } from 'express';
import { User } from "../../entity/user";
import { userList } from '../../utils/userList';
import { Movie } from '../../entity/movies';

export const watchList = async (req: Request, res: Response) => {
  const id = req.params.user_id; // id of the user
  const user = await User.findOne({ where: { id: parseInt(id) } });
  const watchList = user.watchList;
  try {
    // const watchedMovies = user.watchedMovies;
    return res.json({ data: watchList, message: "Watched movies fetched successfully" });
  } catch (err) {
    return res.json({
      error: err.message,
      message: "Error",
    });
  }
};
