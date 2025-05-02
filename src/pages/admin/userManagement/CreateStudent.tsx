import { FieldValues, SubmitHandler } from "react-hook-form";
import PHForm from "../../../components/form/PHForm";
import PHInput from "../../../components/form/PHInput";
import { Button, Col, Divider, Row } from "antd";

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
    bloodGroup: "A+",

    email: "Studentnew2@example.com",
    contactNo: "01993790088",
    emergencyContactNo: "987-654-3210",
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
    console.log(data);

    // const formData = new FormData();
    // formData.append("data", JSON.stringify(data));
    // console.log(Object.fromEntries(formData));
  };
  return (
    <Row>
      <Col span={24}>
        <PHForm onSubmit={onSubmit}>
          <Divider style={{ borderColor: "red", color: "red" }}>
            Personal Information
          </Divider>

          <Row gutter={8}>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput type="text" name="name.firstName" label="First Name" />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput type="text" name="name.middleName" label="Last Name" />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput type="text" name="name.lastName" label="Last Name" />
            </Col>

            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput type="text" name="gender" label="Gender" />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput type="text" name="dateOfBirth" label="Death Of Birth" />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput type="text" name="bloodGroup" label="Blood Group" />
            </Col>
            <Divider style={{ borderColor: "red", color: "red" }}>
              Contact Information
            </Divider>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput type="email" name="email" label="Enter Your Email" />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput type="text" name="contactNo" label="Contact Number" />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput
                type="text"
                name="emergencyContactNo"
                label="Emergency Contact No"
              />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput
                type="text"
                name="presentAddress"
                label="Present Address"
              />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput
                type="text"
                name="permanentAddress"
                label="Permanent Address"
              />
            </Col>
          </Row>
          <Button htmlType="submit">Submit</Button>
        </PHForm>
      </Col>
    </Row>
  );
};

export default CreateStudent;
