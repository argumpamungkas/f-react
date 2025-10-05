import { Fragment, useState } from "react";
import CardProduct from "../components/Fragments/CardProduct";
import Button from "../components/Elements/Button";

const products = [
  {
    id: 1,
    name: "Sepatu Nike",
    image: "/images/shoes.jpg",
    price: 1000000,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, debitis.",
  },
  {
    id: 2,
    name: "Sepatu Adidas",
    image: "/images/shoes.jpg",
    price: 2000000,
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti consectetur illum, doloremque velit officia omnis placeat explicabo, ratione odit officiis animi veniam at, delectus quas!",
  },
  {
    id: 3,
    name: "Sepatu Puma",
    image: "/images/shoes.jpg",
    price: 800000,
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
  },
];

const username = localStorage.getItem("username");

const ProdcutsPage = () => {
  // menggunakan hooks untuk setState
  const [cart, setCart] = useState([
    {
      id: 1,
      qty: 1,
    },
  ]);

  const handleLogout = () => {
    //Remove local storage
    localStorage.removeItem("username");
    localStorage.removeItem("pwd");

    // back to login
    window.location.href = "/login";
  };

  const handleAddToCart = (id) => {
    if (cart.find((item) => item.id === id)) {
      setCart(
        cart.map((item) =>
          item.id === id ? { ...item, qty: item.qty + 1 } : item
        )
      );
    } else {
      setCart([
        ...cart,
        {
          id: id,
          qty: 1,
        },
      ]);
    }
  };

  return (
    <Fragment>
      <div className="flex justify-end bg-blue-900 h-10 text-white px-6 py-8 items-center">
        {username}
        <Button classname="bg-red-700 text-white ml-6" onClick={handleLogout}>
          Logout
        </Button>
      </div>
      <div className="flex justify-center bg-slate-300 py-6">
        <div className="w-4/6 flex flex-wrap">
          {products.map((product) => (
            <CardProduct key={product.id}>
              <CardProduct.Header image={product.image} />
              <CardProduct.Body name={product.name}>
                {product.description}
              </CardProduct.Body>
              <CardProduct.Footer
                price={product.price}
                id={product.id}
                handleAddToCart={handleAddToCart}
              />
            </CardProduct>
          ))}
        </div>
        <div className="w-2/6">
          <h1 className="text-3xl font-bold text-blue-700 ml-5 mb-2">Cart</h1>
          <table className="text-left table-auto border-separate border-spacing-x-5">
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quanity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => {
                const product = products.find(
                  (product) => product.id === item.id
                );
                return (
                  <tr key={product.id}>
                    <td>{product.name}</td>
                    <td>
                      {product.price.toLocaleString("id-ID", {
                        styles: "currency",
                        currency: "IDR",
                      })}
                    </td>
                    <td>{item.qty}</td>
                    <td>
                      Rp{" "}
                      {(product.price * item.qty).toLocaleString("id-ID", {
                        styles: "currency",
                        currency: "IDR",
                      })}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      {/* <Counter></Counter> */}
    </Fragment>
  );
};

export default ProdcutsPage;
