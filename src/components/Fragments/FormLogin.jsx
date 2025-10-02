import InputForm from "../Elements/Inputs/InputsForm";
import Button from "../Elements/Button";

const FormLogin = () => {
  return (
    <form action="" className="">
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
    </form>
  );
};

export default FormLogin;
