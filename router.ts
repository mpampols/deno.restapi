import { Router } from "https://deno.land/x/oak/mod.ts";
import {
  getMovies,
  getMovie,
  createMovie,
  updateMovie,
  deleteMovie,
} from "./api/controller.ts";

const router = new Router();

router
  .get("/movies", getMovies)
  .get("/movie/:id", getMovie)
  .post("/movies", createMovie)
  .put("/movies/:id", updateMovie)
  .delete("/movies/:id", deleteMovie);

export default router;
