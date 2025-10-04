import { Fragment } from "react";
import CardProduct from "../components/Fragments/CardProduct";
import Button from "../components/Elements/Button";

const products = [
  {
    id: 1,
    name: "Sepatu Nike",
    image: "/images/shoes.jpg",
    price: "1.000.000",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, debitis.",
  },
  {
    id: 2,
    name: "Sepatu Adidas",
    image: "/images/shoes.jpg",
    price: "2.000.000",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti consectetur illum, doloremque velit officia omnis placeat explicabo, ratione odit officiis animi veniam at, delectus quas!",
  },
  {
    id: 3,
    name: "Sepatu Puma",
    image: "/images/shoes.jpg",
    price: "800.000",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
  },
];

const username = localStorage.getItem("username");

const ProdcutsPage = () => {
  const handleLogout = () => {
    //Remove local storage
    localStorage.removeItem("username");
    localStorage.removeItem("pwd");

    // back to login
    window.location.href = "/login";
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
        {products.map((product) => (
          <CardProduct key={product.id}>
            <CardProduct.Header image={product.image} />
            <CardProduct.Body name={product.name}>
              {product.description}
            </CardProduct.Body>
            <CardProduct.Footer price={`Rp. ${product.price}`} />
          </CardProduct>
        ))}
      </div>
    </Fragment>
  );
};

export default ProdcutsPage;
