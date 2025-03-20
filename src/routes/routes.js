import App from "../App";
import ErrorPage from "../common/ErrorPage";
import NoResults from "../common/NoResults";
import ActorsListApp from "../features/actorsList/ActorsListApp";
// import MovieListApp from "../features/movieList/MovieListApp";
import MoviePageApp from "../features/moviePage/MoviePageApp";



export const routes = [
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                index: true,
                element: <MoviePageApp />,
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