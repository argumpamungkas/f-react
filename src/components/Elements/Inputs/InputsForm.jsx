import Label from "./Label.jsx";
import Input from "./Input.jsx";
import { forwardRef } from "react";

// Penggunaan ref tidak bisa menggunakan props, tapi harus menggunakan forwardRef dari react
const InputForm = forwardRef((props, ref) => {
  const { name, label, type, placeholder } = props;
  return (
    <div className="mb-4">
      <Label htmlFor={name}>{label}</Label>
      <Input name={name} type={type} placeholder={placeholder} ref={ref} />
    </div>
  );
});

export default InputForm;
