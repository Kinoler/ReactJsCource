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

export const genreList = ["All", "DOCUMENTARY", "COMEDY", "FANTASY", "CRIME"];
export const sortByList = ["Release Date", "Title"];

export const loader: LoaderFunction = async ({ request }) => {
  const queryParams = new URL(request.url).searchParams;
  const searchQuery = queryParams.get('query') || '';
  const selectedGenre = genreList.find(el => el.toLowerCase() === queryParams.get('genre')?.toLowerCase()) || genreList[0];
  const selectedSortBy = sortByList.find(el => el.toLowerCase() === queryParams.get('sortBy')?.toLowerCase()) || sortByList[0];
  const movieList = await getMovieDataAsync(selectedSortBy, searchQuery, selectedGenre, genreList, undefined);
  return { movieList, selectedGenre, selectedSortBy };
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
