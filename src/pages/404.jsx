import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div className="flex flex-col justify-center min-h-screen items-center">
      <div className=" flex flex-col justify-center items-center px-24 py-4 border border-slate-200 rounded-2xl shadow-lg">
        <h1 className="text-red-700 font-bold text-5xl">404</h1>
        <h1 className="font-bold text-2xl mb-2">Oppss....</h1>
        <p className="text-sm">Page not found</p>
        <p> {error.message}</p>
      </div>
    </div>
  );
};

export default ErrorPage;
