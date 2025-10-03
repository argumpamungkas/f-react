import AuthLayout from "../components/Layouts/AuthLayouts";
import FormLogin from "../components/Fragments/FormLogin";

const LoginPage = () => {
  return (
    <AuthLayout title="LOGIN">
      <FormLogin />
    </AuthLayout>
  );
};

export default LoginPage;
