import posterBig from "./posterBig.png";
import posterSmall from "./posterSmall.png";
import star from "./shape-star.svg";
import person from "./person.png";
import personA from "./personA.png";
import personB from "./personB.png";
import personC from "./personC.png";
import personD from "./personD.png";

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
      Title: "Cast",
      People: [
        {
          id: 0,
          poster: personA,
          name: "Liu Yifei",
          character: "Mulon",
        },
        {
          id: 1,
          poster: personB,
          name: "Doonie Yen",
          character: "Komandor Tung",
        },
        {
          id: 2,
          poster: person,
          name: "Liu Yifei",
          character: "Mulon",
        },
        {

          id: 3,
          poster: person,
          name: "Doonie Yen",
          character: "Komandor Tung",
        },
        {
          id: 4,
          poster: personC,
          name: "Liu Yifei",
          character: "Mulon",
        },
        {
          id: 5,
          poster: person,
          name: "Doonie Yen",
          character: "Komandor Tung",
        },
        {
          id: 6,
          poster: personD,
          name: "Liu Yifei",
          character: "Mulon",
        },
        {
          id: 7,
          poster: person,
          name: "Doonie Yen",
          character: "Komandor Tung",
        },
      ],
    },
    Crew: {
      Title: "Crew",
      People: [
        {
          id: 0,
          poster: personC,
          name: "Liu Yifei",
          character: "Director",
        },
        {
          id: 1,
          poster: personD,
          name: "Janson Scot",
          character: "Music",
        },
        {
          id: 2,
          poster: personA,
          name: "Liu Yifei",
          character: "Director",
        },
        {
          id: 3,
          poster: person,
          name: "Janson Scot",
          character: "Music",
        },
        {
          id: 4,
          poster: person,
          name: "Liu Yifei",
          character: "Director",
        },
        {
          id: 5,
          poster: personB,
          name: "Janson Scot",
          character: "Music",
        },
        {
          id: 6,
          poster: personB,
          name: "Liu Yifei",
          character: "Director",
        },
      ],
    },
  },
};