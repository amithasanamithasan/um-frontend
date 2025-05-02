import { DatePicker, Form, Select } from "antd";
import { Controller, useFormContext } from "react-hook-form";

type TOption = {
  label: string;
  value: string;
};

type TDatePickerProps = {
  name: string;
  label?: string;
  options?: TOption[];
};

const PHDatePicker = ({ name, label, options }: TDatePickerProps) => {
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
              <DatePicker {...field} size="large" style={{ width: "100%" }} />
            )}
          </Form.Item>
        )}
      />
    </div>
  );
};

export default PHDatePicker;
