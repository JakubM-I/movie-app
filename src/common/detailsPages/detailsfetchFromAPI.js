export const API_URL = "https://api.themoviedb.org/3";
export const API_key = "?api_key=3fa6324a34b047ad2073727e56c79251";

export const fetchFromAPI = async ({ type, id, details }) => {
  const parameters = {
    ...type,
    ...id,
    ...(details || {}),
  };

  const response = await fetch(`${API_URL}${parameters}${API_key}`);

  if (!response.ok) {
    throw new Error(response.statusText);
  };

  return await response.json();
};

export const API_imageURL = "https://image.tmdb.org/t/p/original";