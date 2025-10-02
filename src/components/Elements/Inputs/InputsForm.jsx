import Label from "./Label.jsx";
import Input from "./Input.jsx";

const InputForm = (props) => {
  const { name, label, type, placeholder } = props;
  return (
    <div className="mb-4">
      <Label htmlFor={name}>{label}</Label>
      <Input name={name} type={type} placeholder={placeholder} />
    </div>
  );
};

export default InputForm;
