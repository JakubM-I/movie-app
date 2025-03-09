import image from "./image.png";
import poster1 from "./poster1.png";
import poster2 from "./poster2.png";
import poster3 from "./poster3.png";
import poster4 from "./poster4.png";
import star from "./star.png";

export const profile = {
  About: {
    PersonalInfo: {
      BirthDate: "25.08.1987",
      BirthPlace: "Wuhan, Hubei, China",
      Info: "Liu Yifei was born in Wuhan, Hubei, Province of China on August 25th, 1987. She began modeling at the age of 8 and was trained in singing, dancing and the piano. Moving to the United States at 10 with her mother, Liu lived there for four years."
    },
    Image: image,
  },
  MoviesCast: {
    Title: "Movies - cast (4)",
    Movies: [
      {
        Poster: poster1,
        Description: {
          Name: "Mulan",
          Year: "Mulan (2020)",
        },
        tags: [
          "Action",
          "Adventure",
          "Drama"
        ],
        Rating: {
          Star: star,
          Notes: "7,8",
          Votes: "35 votes",
        },
      },
      {
        Poster: poster2,
        Description: {
          Name: "Mulan",
          Year: "Diao Chan (2021)",
        },
        tags: [],
        Rating: {
          Star: star,
          Notes: "7,9",
          Votes: "25 votes",
        },
      },
      {
        Poster: poster3,
        Description: {
          Name: "Mulan",
          Year: "Zou Yu (2020)",
        },
        tags: ["Action"],
        Rating: {
          Star: star,
          Notes: "8,0",
          Votes: "45 votes",
        },
      },
      {
        Poster: poster4,
        Description: {
          Name: "Mulan long title long title Mulan long title long",
          Year: "Zou Yu (2020)",
        },
        tags: ["Drama"],
        Rating: {
          Star: star,
          Notes: "8,1",
          Votes: "135 votes",
        },
      }
    ],
  },
  MoviesCrew: {
    Title: "Movies - crew (5)",
    Movies: [
      {
        Poster: poster2,
        Description: {
          Name: "Mulan",
          Year: "Diao Chan (2021)",
        },
        tags: [],
        Rating: {
          Star: star,
          Notes: "7,9",
          Votes: "25 votes",
        },
      },
      {
        Poster: poster1,
        Description: {
          Name: "Mulan",
          Year: "Mulan (2020)",
        },
        tags: ["Action"],
        Rating: {
          Star: star,
          Notes: "7,8",
          Votes: "35 votes",
        },
      },
      {
        Poster: poster3,
        Description: {
          Name: "Mulan",
          Year: "Zou Yu (2020)",
        },
        tags: ["Adventure"],
        Rating: {
          Star: star,
          Notes: "8,0",
          Votes: "45 votes",
        },
      },
      {
        Poster: poster1,
        Description: {
          Name: "Mulan",
          Year: "Mulan (2020)",
        },
        tags: [
          "Action",
          "Adventure",
          "Drama"
        ],
        Rating: {
          Star: star,
          Notes: "7,8",
          Votes: "35 votes",
        },
      },
      {
        Poster: poster4,
        Description: {
          Name: "Mulan long title long title Mulan long title long",
          Year: "Zou Yu (2020)",
        },
        tags: ["Drama"],
        Rating: {
          Star: star,
          Notes: "8,1",
          Votes: "135 votes",
        },
      }
    ],
  },
};