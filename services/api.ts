export const TMDB_CONFIG = {
  BASE_URL: "https://api.themoviedb.org/3",
  API_KEY: process.env.EXPO_PUBLIC_TMDB_API_KEY,
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.EXPO_PUBLIC_TMDB_API_KEY}`,
  },
};



export const fetchMovies = async ({searchQuery} : {searchQuery: string}) => {
  const endPoint = searchQuery ? 
    `${TMDB_CONFIG.BASE_URL}/search/movie?query=${encodeURIComponent(searchQuery)}` 
    : `${TMDB_CONFIG.BASE_URL}/discover/movie?sort_by=popularity.desc`;

  const response = await fetch(
    `${endPoint}&query=${searchQuery}`, {
      method: "GET",
      headers: TMDB_CONFIG.headers,
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch movie: ${response.statusText}`);
    }

    const data = await response.json();
    return data.results;
};
