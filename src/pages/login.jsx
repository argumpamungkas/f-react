import AuthLayout from "../components/Layouts/AuthLayouts";
import FormLogin from "../components/Fragments/FormLogin";
import { useEffect } from "react";

const LoginPage = () => {
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      window.location.href = "/products";
    }
  }, []);

  return (
    <AuthLayout title="LOGIN" type="login">
      <FormLogin />
    </AuthLayout>
  );
};

export default LoginPage;
