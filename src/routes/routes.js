import App from "../App";

export const routes = [
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <MovieListApp />,
            },
            {
                path: "actors",
                element: <ActorsListApp />,
            }
        ]
    }
];