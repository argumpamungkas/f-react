import InputForm from "../Elements/Inputs/InputsForm";
import Button from "../Elements/Button";

const FormLogin = () => {
  const handleLogin = (event) => {
    // handle refresh
    event.preventDefault();

    // ambil data dari form
    console.log(event.target.username.value);
    console.log(event.target.password.value);

    const username = event.target.username.value;
    const pwd = event.target.password.value;

    localStorage.setItem("username", username);
    localStorage.setItem("pwd", pwd);

    // redirect
    window.location.href = "/products";

    console.log("Click LOGIN");
  };

  return (
    // Saat submit
    <form onSubmit={handleLogin}>
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
      <Button classname="bg-blue-700 w-full" type="submit">
        Login
      </Button>
    </form>
  );
};

export default FormLogin;
