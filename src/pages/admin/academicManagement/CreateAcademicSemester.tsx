import { FieldValues, SubmitHandler } from "react-hook-form";
import PHForm from "../../../components/form/PHForm";
import PHInput from "../../../components/form/PHInput";
import { Button } from "antd";
import PHSelect from "../../../components/form/PHSelect";

const CreateAcademicSemester = () => {
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
  };
  return (
    <PHForm onSubmit={onSubmit}>
      <PHInput type="text " name="name" label="name" />
      <PHInput type="text " name="name" label="year" />
      <Button htmlType="submit">Submit</Button>
      <PHSelect label="name" />
    </PHForm>
  );
};

export default CreateAcademicSemester;
