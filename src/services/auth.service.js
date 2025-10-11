import axios from "axios";
import { jwtDecode } from "jwt-decode";

// const product = { title: 'New Product', price: 29.99 };
// fetch('https://fakestoreapi.com/products', {
//   method: 'POST',
//   headers: { 'Content-Type': 'application/json' },
//   body: JSON.stringify(product)
// })
//   .then(response => response.json())
//   .then(data => console.log(data));
export const login = (data, calllback) => {
  axios
    .post("https://fakestoreapi.com/auth/login", data)
    .then((res) => {
      //   console.log(`Rsponse ${res.data}`);
      calllback(true, res.data);
    })
    .catch((error) => {
      //   console.log(`Error ${error}`);
      calllback(false, error);
    });
};

export const getUsername = (token) => {
  const data = jwtDecode(token);
  return data.user;
};
