
export const getMoviesData = async (page = 1) => {
    // const page = useSelector(currentPageSelector);
    // console.log(`/movie-app/example-api.json?page=${page}`);

    const response = await fetch(`/movie-app/example-api.json?page=${page}`);

    if (!response.ok) {
        throw new Error(response.statusText);
    }

    return await response.json();
}