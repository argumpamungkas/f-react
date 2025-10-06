import { Fragment, useEffect, useRef, useState } from "react";
import CardProduct from "../components/Fragments/CardProduct";
import Button from "../components/Elements/Button";
import Counter from "../components/Fragments/Counter";
import { getProducts } from "../services/product.service";

// const products = [
//   {
//     id: 1,
//     name: "Sepatu Nike",
//     image: "/images/shoes.jpg",
//     price: 1000000,
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, debitis.",
//   },
//   {
//     id: 2,
//     name: "Sepatu Adidas",
//     image: "/images/shoes.jpg",
//     price: 2000000,
//     description:
//       "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti consectetur illum, doloremque velit officia omnis placeat explicabo, ratione odit officiis animi veniam at, delectus quas!",
//   },
//   {
//     id: 3,
//     name: "Sepatu Puma",
//     image: "/images/shoes.jpg",
//     price: 800000,
//     description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
//   },
// ];

const username = localStorage.getItem("username");

const ProdcutsPage = () => {
  // menggunakan hooks untuk setState
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [products, setProducts] = useState([]);

  //hooks useEffect unutk memanipulasi/seperti componentDidUpdate
  useEffect(() => {
    console.log("Use Effect");
    // ambil ke storage, jika ada maka parse, jika tidak ada maka array kosong
    setCart(JSON.parse(localStorage.getItem("cart")) || []);
  }, []); // harus nambah dependecies meskipun kosong / []

  //fetch product all
  useEffect(() => {
    getProducts((data) => {
      console.log(data);
      setProducts(data);
    });
  }, []);

  useEffect(() => {
    if (products.length > 0 && cart.length > 0) {
      const sum = cart.reduce((acc, item) => {
        const product = products.find((product) => product.id === item.id);
        return acc + product.price * item.qty;
      }, 0);
      setTotalPrice(sum);

      // dibuat menjadi json string
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart, products]); // dependencies diisi dengan nilai atau data yang akan dipantau
  // jadi jika cart na berubah maka kita akan melakukan sesuatu

  const handleLogout = () => {
    //Remove local storage
    localStorage.removeItem("username");
    localStorage.removeItem("pwd");

    // back to login
    window.location.href = "/login";
  };

  const handleAddToCart = (id) => {
    console.log("Add to Cart");
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

  // UseRef
  // const cartRef = useRef(JSON.parse(localStorage.getItem("cart")) || []);

  // secara background dia berjalan, tapi secara view/ui dia harus dirender ulang agar ui terupdate sesuai action yang dilakukan
  // const handleAddToCartRef = (id) => {
  //   cartRef.current = [...cartRef.current, { id: id, qty: 1 }];
  //   localStorage.setItem("cart", JSON.stringify(cartRef.current));
  // };

  // useReff untuk memanipulasi DOM
  const totalPriceRef = useRef(null);

  console.log(totalPriceRef);

  useEffect(() => {
    if (cart.length > 0) {
      totalPriceRef.current.style.display = "table-row";
    } else {
      totalPriceRef.current.style.display = "none";
    }
  }, [cart]);

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
          {products.length > 0 &&
            products.map((product) => (
              <CardProduct key={product.id}>
                <CardProduct.Header image={product.image} />
                <CardProduct.Body name={product.title}>
                  {product.description}
                </CardProduct.Body>
                <CardProduct.Footer
                  price={product.price}
                  id={product.id}
                  handleAddToCart={handleAddToCart}
                  // handleAddToCart={handleAddToCartRef}
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
              {products.length > 0 &&
                cart.map((item) => {
                  const product = products.find(
                    (product) => product.id === item.id
                  );
                  return (
                    <tr key={product.id}>
                      <td>{product.title}</td>
                      <td>
                        {product.price.toLocaleString("id-ID", {
                          styles: "currency",
                          currency: "IDR",
                        })}
                      </td>
                      <td>{item.qty}</td>
                      <td>
                        ${" "}
                        {(product.price * item.qty).toLocaleString("id-ID", {
                          styles: "currency",
                          currency: "USD",
                        })}
                      </td>
                    </tr>
                  );
                })}
              <tr ref={totalPriceRef}>
                <td colSpan={3}>Total Price</td>
                <td>
                  <b>
                    $
                    {totalPrice.toLocaleString("id-ID", {
                      styles: "currency",
                      currency: "USD",
                    })}
                  </b>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      {/* <div className="mt-5 flex justify-center">
        <Counter></Counter>
      </div> */}
    </Fragment>
  );
};

export default ProdcutsPage;
