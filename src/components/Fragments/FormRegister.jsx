import InputForm from "../Elements/Inputs/InputsForm";
import Button from "../Elements/Button";

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
    </form>
  );
};

export default FormRegister;
