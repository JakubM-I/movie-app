import App from "../App";
import ErrorPage from "../common/ErrorPage";
import NoResults from "../common/NoResults";
import ActorsListApp from "../features/actorsList/ActorsListApp";
import MovieListApp from "../features/movieList/MovieListApp";

export const routes = [
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                index: true,
                element: <MovieListApp />,
            },
            {
                path: "actors",
                element: <ActorsListApp />,
            },
            {
                path: "noresults",
                element: <NoResults />,
            },
            {
                path: "error",
                element: <ErrorPage />,
            }
        ]
    }
];