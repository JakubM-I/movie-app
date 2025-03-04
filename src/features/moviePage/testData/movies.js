import posterBig from "./posterBig.png";
import posterSmall from "./posterSmall.png";
import star from "./shape-star.svg";
import poster from "./person.png";
import picture from "./picture.png";

export const movies = {
  Header: "",
  Top: {
    MainInfo: {},
    PosterBig: posterBig,
  },
  Content: {
    MovieTile: {
      Poster: posterSmall,
      MovieData: {
        Title: "Mulan",
        Year: "2020",
        Production: "China, USA",
        Date: "24.10.2020",
        tags: {
          action: "Action",
          adventure: "Adventure",
          drama: "Drama",
        },
        Rating: {
          Max: " /10",
          Votes: "335 votes",
          Star: star,
          Notes: " 7,8",
        },
        description: "A young Chinese maiden disguises herself as a male warrior in order to save her father. Disguises herself as a male warrior in order to save her father.  A young Chinese maiden disguises herself as a male warrior in order to save her father.",
      }
    },
    Cast: {
      Cast: "Cast",
      PersonTiles0: {
        poster: poster,
        name: "Liu Yifei",
        character: "Mulon",
      },
      PersonTiles1: {
        poster: picture,
        name: "Doonie Yen",
        character: "Komandor Tung",
      },
    },
    Crew: {
      Crew: "Crew",
      PersonTiles0: {
        poster: poster,
        name: "Liu Yifei",
        character: "Director",
      },
      PersonTiles1: {
        poster: picture,
        name: "Janson Scot",
        character: "Music",

      },
    },
  },
};

/* export const descryption = "A young Chinese maiden disguises herself as a male warrior in order to save her father. Disguises herself as a male warrior in order to save her father.  A young Chinese maiden disguises herself as a male warrior in order to save her father."; */