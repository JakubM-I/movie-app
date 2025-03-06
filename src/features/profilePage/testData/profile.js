import image from "./image.png";

export const profile = {
  About: {
    PersonalInfo: {},
    Image: image,
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
          poster: personC,
          name: "Liu Yifei",
          character: "Director",
        },
        {
          poster: personD,
          name: "Janson Scot",
          character: "Music",
        },
        {
          poster: personA,
          name: "Liu Yifei",
          character: "Director",
        },
        {
          poster: person,
          name: "Janson Scot",
          character: "Music",
        },
        {
          poster: person,
          name: "Liu Yifei",
          character: "Director",
        },
        {
          poster: personB,
          name: "Janson Scot",
          character: "Music",
        },
        {
          poster: personB,
          name: "Liu Yifei",
          character: "Director",
        },
      ],
    },
  },
};

/* export const descryption = "A young Chinese maiden disguises herself as a male warrior in order to save her father. Disguises herself as a male warrior in order to save her father.  A young Chinese maiden disguises herself as a male warrior in order to save her father."; */