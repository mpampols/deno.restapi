interface Movie {
  id: string;
  title: string;
  rating: number;
}

/**
 * Sample array with movies
 */
let movies: Array<Movie> = [
  {
    id: "1",
    title: "TENET",
    rating: 10,
  },
  {
    id: "2",
    title: "No Time to Die",
    rating: 8,
  },
  {
    id: "3",
    title: "The Way Back",
    rating: 7,
  },
  {
    id: "4",
    title: "The Invisible Man",
    rating: 9,
  },
  {
    id: "5",
    title: "Onward",
    rating: 8,
  },
];

/**
 * Returns all the movies in database
 */
const getMovies = ({ response }: { response: any }) => {
  response.body = movies;
};

/**
 * Returns a movie by id
 */
const getMovie = ({
  params,
  response,
}: {
  params: { id: string };
  response: any;
}) => {
  const movie = movies.filter((movie) => movie.id == params.id)[0];
  if (movie) {
    response.status = 200;
    response.body = movie;
  } else {
    response.status = 404;
    response.body = { message: "404 Not found" };
  }
};

/**
 * Creates a new movie
 */
const createMovie = async ({
  request,
  response,
}: {
  request: any;
  response: any;
}) => {
  const body = await request.body();
  const movie: Movie = body.value;
  movies.push(movie);
  response.body = { success: true, data: movie };
  response.status = 201;
};

/**
 * Updates an existing movie
 */
const updateMovie = async ({
  params,
  request,
  response,
}: {
  params: { id: string };
  request: any;
  response: any;
}) => {
  const movie = movies.filter((movie) => movie.id == params.id)[0];
  if (movie) {
    const body = await request.body();
    movie.title = body.value.title;
    movie.rating = body.value.rating;
    response.status = 200;
    response.body = {
      success: true,
      data: movies,
    };
  } else {
    response.status = 404;
    response.body = {
      success: false,
      message: "Movie not found",
    };
  }
};

/**
 * Deletes a movie by a given id
 */
const deleteMovie = ({
  params,
  response,
}: {
  params: { id: string };
  response: any;
}) => {
  movies = movies.filter((movie) => movie.id !== params.id);
  response.status = 200;
  response.body = { success: true, message: "Movie removed" };
};

export { getMovies, getMovie, createMovie, updateMovie, deleteMovie };
