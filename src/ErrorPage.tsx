import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);
  const sadFace = ">.<"
  return (
    <div className="bg-lightMain dark:bg-darkMain h-screen flex flex-col justify-center">
      <h1 className="text-7xl font-redHat text-center font-bold">Oops! {sadFace}</h1>
      <p className="text-3xl text-center mt-16">Sorry, an unexpected error has occurred.</p>
      <p className="text-center mt-3">
        Error: 
        <i> {error.statusText || error.message}</i>
      </p>
    </div>
  );
}