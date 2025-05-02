import { Form, Input, Select } from "antd";
import { Controller, useFormContext } from "react-hook-form";

type TOption = {
  label: string;
  value: string;
};

type TInputProps = {
  type?: string;
  name: string;
  label?: string;
  options?: TOption[];
};

const PHInput = ({ type = "text", name, label, options }: TInputProps) => {
  const { control } = useFormContext();

  return (
    <div style={{ marginBottom: "20px" }}>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <Form.Item label={label}>
            {options ? (
              <Select
                {...field}
                options={options}
                onChange={(value) => field.onChange(value)}
                onBlur={field.onBlur}
                value={field.value}
                size="large"
              />
            ) : (
              <Input {...field} type={type} id={name} size="large" />
            )}
          </Form.Item>
        )}
      />
    </div>
  );
};

export default PHInput;
