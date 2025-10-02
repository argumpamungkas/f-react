// import "../../../index.css";

const Button = (props) => {
  // default value
  const { children = "...", classname = "bg-black" } = props;
  return (
    <button
      class={`h-10 px-6 font-semibold rounded-md ${classname} text-white`}
      type="submit"
    >
      {children}
    </button>
  );
};

export default Button;
