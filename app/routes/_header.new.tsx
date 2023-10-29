import type { MetaFunction } from "@remix-run/node";
import AddMovieForm from "~/components/MovieForm/AddMovieForm";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to 4Remix!" },
  ];
};

export default function Index() {
  return (
    <AddMovieForm />
  );
}