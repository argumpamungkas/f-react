import axios from "axios";

export const getProducts = (calllback) => {
  axios
    .get("https://fakestoreapi.com/products")
    .then(function (response) {
      // handle success
      //   console.log(response["data"]);
      calllback(response.data);
    })
    .catch(function (error) {
      // handle error
      console.log(`Catch ${error}`);
    })
    .finally(function () {
      // always executed
      // console.log("get product done");
    });
};

export const getDetailProduct = (id, callback) => {
  axios
    .get(`https://fakestoreapi.com/products/${id}`)
    .then((res) => {
      console.log(res);
      callback(true, res.data);
    })
    .catch((error) => {
      console.log(error);
      callback(false, error);
    });
};
