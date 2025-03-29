import { FieldValues, SubmitHandler } from "react-hook-form";
import PHForm from "../../../components/form/PHForm";

import { Button, Col, Flex } from "antd";
import PHSelect from "../../../components/form/PHSelect";

const CreateAcademicSemester = () => {
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    const semesterData = {
      name: "Something",
      code: "Something",
    };
    console.log(semesterData);
  };

  const nameOptions = [
    {
      value: "01",
      label: "Autumn",
    },
    {
      value: "02",
      label: "Summer",
    },

    {
      value: "03",
      label: "Fall",
    },
  ];
  //   const codeOptions = [
  //     {
  //       value: "01",
  //       lable: "01",
  //     },
  //     {
  //       value: "02",
  //       lable: "02",
  //     },
  //     {
  //       value: "03",
  //       lable: "03",
  //     },
  //   ];
  return (
    <Flex justify="center" align="center">
      <Col span={6}>
        <PHForm onSubmit={onSubmit}>
          <PHSelect label="Name" name="name" options={nameOptions} />
          {/* <PHSelect label="Code" name="name" options={codeOptions} /> */}
          <Button htmlType="submit">Submit</Button>
        </PHForm>
      </Col>
    </Flex>
  );
};

export default CreateAcademicSemester;
