import Button from "../Elements/Button";

const CardProduct = (props) => {
  const { children } = props;
  return (
    <div className="w-full max-w-sm bg-gray-800 border border-gray-700 rounded-lg shadow mx-2 flex flex-col justify-between">
      {children}
    </div>
  );
};

const Header = (props) => {
  const { image } = props;
  return (
    <a href="#">
      <img
        src={image}
        alt="product"
        className="h-56 w-full object-cover p-8 rounded"
      />
    </a>
  );
};

const Body = (props) => {
  const { children, name } = props;
  return (
    <div className="px-8 pb-4 h-full">
      <a href="$">
        <h5 className="text-xl font-bold text-white tracking-tight">{name}</h5>
        <p className="text-white tracking-tight text-sm">{children}</p>
      </a>
    </div>
  );
};

const Footer = (props) => {
  const { price } = props;
  return (
    <div className="flex justify-between items-center text-white px-8 pb-4">
      <span className="text-lg font-bold">{price}</span>
      <Button classname="bg-blue-700">Add to Cart</Button>
    </div>
  );
};

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

export default CardProduct;
