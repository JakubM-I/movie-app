import App from "../App";
import ErrorPage from "../common/ErrorPage";
import NoResults from "../common/NoResults";
import ActorsListApp from "../features/actorsList/ActorsListApp";
// import ProfilePageApp from "../features/profilePage/ProfilePageApp";
import MoviePageApp from "../features/moviePage/MoviePageApp";
// import MovieListApp from "../features/movieList/MovieListApp";


export const routes = [
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                index: true,
                element: <MoviePageApp />
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