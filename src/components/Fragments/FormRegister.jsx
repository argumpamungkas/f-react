import InputForm from "../Elements/Inputs/InputsForm";
import Button from "../Elements/Button";
import { Link } from "react-router-dom";

const FormRegister = () => {
  return (
    <form action="">
      <InputForm
        name="fullName"
        label="Full Name"
        type="text"
        placeholder="Frank Lampard"
      />
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
      <InputForm
        name="confirmPassword"
        label="Confirm Password"
        type="password"
        placeholder="****"
      />
      <Button classname="bg-blue-700 w-full">Register</Button>
      <div className="mt-2 text-center">
        <small>
          Already an account ?{" "}
          <Link to="/login">
            <bold className="font-bold text-blue-700 cursor-pointer">
              Login
            </bold>
          </Link>
        </small>
      </div>
    </form>
  );
};

export default FormRegister;
