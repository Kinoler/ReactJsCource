import { cssBundleHref } from "@remix-run/css-bundle";
import type { LinksFunction, LoaderFunction } from "@remix-run/node";
import './styles.css';
import {
  Links,
  LiveReload,
  Meta,
  Scripts,
  ScrollRestoration
} from "@remix-run/react";
import MovieListPage from "./components/MovieListPage/MovieListPage";
import { getMovieDataAsync } from "./api/api";

export const links: LinksFunction = () => [
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
];

const genreList = ["All", "DOCUMENTARY", "COMEDY", "FANTASY", "CRIME"];
const sortByList = ["Release Date", "Title"];

export const loader: LoaderFunction = async ({ params }) => {
  const searchQuery = params.query || '';
  const selectedGenre = genreList.find(el => el.toLowerCase() === params.genre?.toLowerCase()) || genreList[0];
  const selectedSortBy = sortByList.find(el => el.toLowerCase() === params.sortBy?.toLowerCase()) || sortByList[0];
  const movieList = await getMovieDataAsync(selectedSortBy, searchQuery, selectedGenre, genreList, undefined);
  return { movieList };
};

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <MovieListPage />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
