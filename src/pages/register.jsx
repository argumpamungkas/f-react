import AuthLayout from "../components/Layouts/AuthLayouts";
import FormRegister from "../components/Fragments/FormRegister";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  return (
    <AuthLayout title="Register">
      <FormRegister />
      <p className="text-center mt-4 text-sm">
        Have an account ? {/* <Link to="/login"> */}
        <Link to="/login" className="font-bold text-blue-700 cursor-pointer">
          Login
        </Link>
      </p>
    </AuthLayout>
  );
};

export default RegisterPage;
