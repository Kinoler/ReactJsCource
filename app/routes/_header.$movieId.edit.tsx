import type { MetaFunction } from "@remix-run/node";
import EditMovieFormRouter from "~/components/Routers/EditMovieFormRouter";
import { loaderById } from "~/loaders/loaderById";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to 4Remix!" },
  ];
};

export const loader = loaderById;

export default function Index() {
  return (
    <EditMovieFormRouter />
  );
}