import AuthLayout from "../components/Layouts/AuthLayouts";
import FormLogin from "../components/Fragments/FormLogin";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <AuthLayout title="LOGIN">
      <FormLogin />
      <p className="text-center mt-4 text-sm">
        Create an account ?{" "}
        <Link to="/register" className="font-bold text-blue-700 cursor-pointer">
          Register
        </Link>
      </p>
    </AuthLayout>
  );
};

export default LoginPage;
