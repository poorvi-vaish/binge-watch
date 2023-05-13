import { Movie } from "../../entity/movies";

const { Client } = require("@notionhq/client");
const notion = new Client({ auth: process.env.NOTION_API_KEY });

const createPage = async () => {
  try {
    const movieList = await Movie.find();
    // console.log(movieList);
    movieList.forEach(async (movie: any) => {
      const response = await notion.pages.create({
        parent: {
          type: "database_id",
          database_id: process.env.MOVIE_DATABASE,
        },
        properties: {
          Rank: {
            number: movie.rank,
          },
          Name: {
            title: [
              {
                text: {
                  content: movie.title,
                },
              },
            ],
          },
          Description: {
            rich_text: [
              {
                text: {
                  content: movie.description,
                },
              },
            ],
          },
          Year: { number: movie.year },
          Rating: { number: parseFloat(movie.rating) },
        },
      });
    });
  } catch (err) {
    console.log(err);
  }
};

export default createPage;
