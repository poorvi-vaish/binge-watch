import { Movie } from "../../entity/movies";
import { User } from "../../entity/user";
import { userList } from "../../utils/userList";

const addAllUsers = () => {
  userList.forEach(async (ele: any) => {
    const user = new User();
    user.firstName = ele.firstName;
    user.lastName = ele.lastName;
    user.email = ele.email;
    const movie_list =await Movie.find({ where: { genre: ele.genre } });
    user.watchList = movie_list;
    await user.save();
  });
}

export default addAllUsers;
