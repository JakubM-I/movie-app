
export const getSearchMovie = async (query, page = 1) => {

    const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=${page}`);

    if (!response.ok) {
        throw new Error(response.statusText);
    }

    return await response.json();
}