import { FieldValues, SubmitHandler } from "react-hook-form";
import PHForm from "../../../components/form/PHForm";
import PHInput from "../../../components/form/PHInput";
import { Button } from "antd";

const studentDummyData = {
  password: "student123",
  student: {
    name: {
      firstName: "Student13",
      middleName: "hasan",
      lastName: "Amit",
    },
    gender: "male",
    dateOfBirth: "2001-05-20",
    email: "Studentnew2@example.com",
    contactNo: "01993790088",
    emergencyContactNo: "987-654-3210",
    bloodGroup: "A+",
    presentAddress: "123 Elm Street, Citytown",
    permanentAddress: "456 Pine Avenue, Villageville",
    guardian: {
      fatherName: "James Doe",
      fatherOccupation: "Engineer",
      fatherContactNo: "555-789-1234",
      motherName: "Mary Doe",
      motherOccupation: "Teacher",
      motherContactNo: "321-654-9870",
    },
    localGuardian: {
      name: "Henry Smith",
      occupation: "Engineer",
      contactNo: "456-789-1234",
      address: "789 Oak Street, Suburban",
    },
    admissionSemester: "675d7706ff48d10777d1be46",
    profileImage: "https://example.com/profiles/john.jpg",
    academicDepartment: "676fabc9dbffb8725d12b804",
  },
};

const CreateStudent = () => {
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    // console.log(data);

    const formData = new FormData();
    formData.append("data", JSON.stringify(data));
    console.log(Object.fromEntries(formData));
  };
  return (
    <PHForm onSubmit={onSubmit}>
      <PHInput type="text" name="name" label="name" />
      <Button htmlType="submit">Submit</Button>
    </PHForm>
  );
};

export default CreateStudent;
