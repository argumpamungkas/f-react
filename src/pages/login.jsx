import AuthLayout from "../components/Layouts/AuthLayouts";
import FormLogin from "../components/Fragments/FormLogin";

const LoginPage = () => {
  return (
    <AuthLayout title="LOGIN">
      <FormLogin />
      <div className="mt-2 text-center">
        <small>
          Create an account ?{" "}
          <bold className="font-bold text-blue-700 cursor-pointer">
            Register
          </bold>
        </small>
      </div>
    </AuthLayout>
  );
};

export default LoginPage;
