import { Input } from "antd";
import { useFormContext } from "react-hook-form";
type TInputProps = {
  type: string;
  name: string;
  label?: string;
};
const PHInput = ({ type, name, label }: TInputProps) => {
  const { register } = useFormContext();
  return;
  <>
    {label ? label : null}
    <Input type={type} id={name} {...register("password")} />
  </>;
};

export default PHInput;
