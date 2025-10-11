import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDetailProduct } from "../services/product.service";

// REACT ROUTER DOM
const DetailProductPage = () => {
  // mengambil id dari path routing /product/:id
  const { id } = useParams();
  const [productFailed, setProductFailed] = useState("");
  const [product, setProduct] = useState({});

  useEffect(() => {
    getDetailProduct(id, (status, res) => {
      if (status) {
        setProduct(res);
      } else {
        console.log("Error", res);
        setProductFailed(res);
      }
    });
  }, [id]);

  return (
    <div className="flex justify-center min-h-screen w-100 items-center">
      {productFailed.length > 0 && <h1>{productFailed}</h1>}
      {/* cek apakah punya isi didalam object product? */}
      {Object.keys(product).length > 0 && (
        <div className="flex font-serif max-w-xl p-4 border border-green-300">
          <div className="flex-none w-52 relative">
            <img
              src={product.image}
              alt={product.title}
              className="absolute inset-0 w-full h-100 object-cover rounded-lg"
              loading="lazy"
            />
          </div>
          <form className="flex-auto p-6">
            <div className="flex flex-wrap items-baseline">
              <h1 className="w-full flex-none mb-3 text-2xl leading-none text-slate-900">
                {product.title}
              </h1>
              <h2 classNameName="w-full flex-none">
                Category: {product.category}
              </h2>
              <div className="w-full flex-none text-lg font-medium text-slate-500">
                ${product.price}
              </div>
              <div className="text-xs leading-6 font-medium text-slate-500">
                Review {product.rating.rate}/5 ({product.rating.count}) ⭐
              </div>
            </div>
            <div className="flex items-baseline mt-4 mb-6 pb-6 border-b border-slate-200">
              <div className="flex flex-col text-sm font-medium">
                <h3 className="font-bold text-xl ">Description</h3>
                <p>{product.description}</p>
              </div>
            </div>
            <div className="flex space-x-4 mb-5 text-sm font-medium">
              <div className="flex-auto flex space-x-4 pr-4">
                <button
                  className="flex-none w-1/2 h-12 uppercase font-medium tracking-wider bg-slate-900 text-white"
                  type="submit"
                >
                  Buy now
                </button>
                <button
                  className="flex-none w-1/2 h-12 uppercase font-medium tracking-wider border border-slate-200 text-slate-900"
                  type="button"
                >
                  Add to bag
                </button>
              </div>
              <button
                className="flex-none flex items-center justify-center w-12 h-12 text-slate-300 border border-slate-200"
                type="button"
                aria-label="Like"
              >
                <svg
                  width="20"
                  height="20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                  />
                </svg>
              </button>
            </div>
            <p className="text-sm text-slate-500">
              Free shipping on all continental US orders.
            </p>
          </form>
        </div>
      )}

      {/* Tidak ada data productnya */}
      {Object.keys(product).length === 0 && (
        <div>
          <p>Product tidak ditemukan</p>
        </div>
      )}
    </div>
  );
};

export default DetailProductPage;
