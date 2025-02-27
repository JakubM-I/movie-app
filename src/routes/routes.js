import App from "../App";
import ActorsListApp from "../features/actorsList/ActorsListApp";
import MovieListApp from "../features/movieList/MovieListApp";

export const routes = [
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                index: true,
                element: <MovieListApp />,
            },
            {
                path: "actors",
                element: <ActorsListApp />,
            }
        ]
    }
];