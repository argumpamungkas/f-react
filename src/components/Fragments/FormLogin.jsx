import InputForm from "../Elements/Inputs/InputsForm";
import Button from "../Elements/Button";
import { useEffect, useRef, useState } from "react";
import { login } from "../../services/auth.service";

const FormLogin = () => {
  const [loginFailed, setLoginFailed] = useState("");

  const handleLogin = (event) => {
    // handle refresh
    event.preventDefault();

    // ambil data dari form
    console.log(event.target.username.value);
    console.log(event.target.password.value);

    const username = event.target.username.value;
    const pwd = event.target.password.value;

    // localStorage.setItem("username", username);
    // localStorage.setItem("pwd", pwd);

    // redirect
    // window.location.href = "/products";

    const data = {
      username: username,
      password: pwd,
    };

    login(data, (status, res) => {
      if (status) {
        localStorage.setItem("token", res.token);
        window.location.href = "/products";
      } else {
        console.log(res.response.data);
        setLoginFailed(res.response.data);
      }
    });

    console.log("Click LOGIN");
  };

  const usernameRef = useRef(null);

  // akan dijalankan dan auto focus saat masuk pagenya
  useEffect(() => {
    usernameRef.current.focus();
  }, []);

  return (
    // Saat submit
    <form onSubmit={handleLogin}>
      <InputForm
        name="username"
        label="Username"
        type="text"
        placeholder="frank.lampard"
        ref={usernameRef}
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
      {loginFailed.length > 0 && (
        <p className="text-red-500 text-center mt-2 bg-red-200 p-2 border border-red-600 rounded-lg">
          {loginFailed}
        </p>
      )}
    </form>
  );
};

export default FormLogin;
