import InputForm from "../Elements/Inputs/InputsForm";
import Button from "../Elements/Button";
import { Link } from "react-router-dom";

const FormLogin = () => {
  return (
    <form action="">
      <InputForm
        name="username"
        label="Username"
        type="text"
        placeholder="frank.lampard"
      />
      <InputForm
        name="password"
        label="Password"
        type="password"
        placeholder="****"
      />
      <Button classname="bg-blue-700 w-full">Login</Button>
      <div className="mt-2 text-center">
        <small>
          Create an account ?{" "}
          <Link to="/register">
            <bold className="font-bold text-blue-700 cursor-pointer">
              Register
            </bold>
          </Link>
        </small>
      </div>
    </form>
  );
};

export default FormLogin;
