export const getMoviesData = async () => {
    const response = await fetch("/movie-app/example-api.json");

    if (!response.ok) {
        throw new Error(response.statusText);
    }

    return await response.json();
}