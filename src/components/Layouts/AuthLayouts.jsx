import { Link } from "react-router-dom";

const AuthLayout = (props) => {
  const { children, title, type } = props;
  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className=" w-full max-w-md border rounded-lg shadow-md p-6">
        <div className="mb-4 text-center">
          <h1 className="text-3xl font-bold mb-2 font-sans">{title}</h1>
          <p className="font-sans">Welcome Back!, please enter your details!</p>
        </div>
        {children}
        <Navigation type={type} />
        {/* <p className="text-center mt-4 text-sm">
          {type === "login" ? "Don't have an Account? " : "Create an account? "}
          {type == "login" && (
            <Link
              to="/register"
              className="font-bold text-blue-700 cursor-pointer"
            >
              Register
            </Link>
          )}

          {type == "register" && (
            <Link
              to="/login"
              className="font-bold text-blue-700 cursor-pointer"
            >
              Login
            </Link>
          )}
        </p> */}
      </div>
    </div>
  );
};

const Navigation = ({ type }) => {
  if (type === "login") {
    return (
      <p className="text-center mt-4 text-sm">
        Don't have an Account?{" "}
        <Link to="/register" className="font-bold text-blue-700 cursor-pointer">
          Register
        </Link>
      </p>
    );
  } else {
    return (
      <p className="text-center mt-4 text-sm">
        Have an account?{" "}
        <Link to="/login" className="font-bold text-blue-700 cursor-pointer">
          Login
        </Link>
      </p>
    );
  }
};

export default AuthLayout;
