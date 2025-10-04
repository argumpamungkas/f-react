// import "../../../index.css";

const Button = (props) => {
  // default value
  const {
    children = "...",
    classname = "bg-black",
    onClick = () => {}, // dibuat kosong untuk menangani type button submit
    type = "button",
  } = props;
  return (
    <button
      className={`h-10 px-6 font-semibold rounded-md ${classname} text-white`}
      type={type}
      onClick={() => onClick()}
    >
      {children}
    </button>
  );
};

export default Button;
