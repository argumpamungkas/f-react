import FormLogin from "../Fragments/FormLogin";

const AuthLayout = (props) => {
  const { children, title } = props;
  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className=" w-full max-w-md border rounded-lg shadow-md p-6">
        <div className="mb-4 text-center">
          <h1 className="text-3xl font-mono font-bold">{title}</h1>
          <p className="font-medium font-mono">
            Welcome Back!, please enter your details!
          </p>
        </div>
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
