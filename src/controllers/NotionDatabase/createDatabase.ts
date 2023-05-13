import { Client } from "@notionhq/client";

const notion = new Client({ auth: process.env.NOTION_API_KEY });

const createMovieDatabase = async () => {
  try {
    const response = await notion.databases.create({
      parent: {
        type: "page_id",
        page_id: "80a89d8d97114f38bf0621f4a0eec01e",
      },
      title: [
        {
          type: "text",
          text: {
            content: "Movie List",
            link: null,
          },
        },
      ],
      properties: {
        Rank: {
          number: {},
        },
        Name: {
          title: {},
        },
        Description: {
          rich_text: {},
        },
        Year: {
          number: {},
        },
        Rating: {
          number: {},
        },
      },
    });

  } catch (err) {
    console.error(err);
  }
};

const createUserDatabase = async () => {
  try {
    const response = await notion.databases.create({
      parent: {
        type: "page_id",
        page_id: "80a89d8d97114f38bf0621f4a0eec01e",
      },
      title: [
        {
          type: "text",
          text: {
            content: "User List",
            link: null,
          },
        },
      ],
      properties: {
        Name: {
          title: {},
        },
        Email: {
          email: {},
        },
      },
    });

  } catch (err) {
    console.error(err);
  }
};

export default {createMovieDatabase, createUserDatabase};
