import { Button, Col, Flex } from "antd";
import PHForm from "../../../components/form/PHForm";
import PHInput from "../../../components/form/PHInput";
import {
  useGetAcademicDepartmentsQuery,
  useGetAcademicFacultiesQuery,
} from "../../../redux/features/admin/academicSemesterManagement.api";
import PHSelectWithWatch from "../../../components/form/PHSelectWithWatch";
import { useState } from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";
import {
  useAddCourseFacultyQuery,
  useGetAllCoursesQuery,
  useGetAllRegisteredSemestersQuery,
} from "../../../redux/features/admin/courseManagement";
import PHSelect from "../../../components/form/PHSelect";
import PHTimePicker from "../../../components/form/PHTimePicker";

const weekDaysOptions = [
  { value: "SATURDAY", label: "Saturday" },
  { value: "SUNDAY", label: "Sunday" },
  { value: "MONDAY", label: "Monday" },
  { value: "TUESDAY", label: "Tuesday" },
  { value: "WEDNESDAY", label: "Wednesday" },
  { value: "THURSDAY", label: "Thursday" },
  { value: "FRIDAY", label: "Friday" },
];

interface TOfferedCourse extends FieldValues {
  academicSemester: string;
  test: string;
}

interface TCourse {
  _id: string;
  title: string;
}

interface TFaculty {
  _id: string;
  fullName: string;
}

const OfferCourse = () => {
  const [courseId, setCourseId] = useState("");
  const { data: facultiesData, isFetching: fechingFaculties } =
    useAddCourseFacultyQuery(courseId, { skip: !courseId });
  const { data: semesterRegistrationData } = useGetAllRegisteredSemestersQuery([
    { name: "sort", value: "year" },
    { name: "status", value: "UPCOMING" },
  ]);

  const { data: academicFacultyData } = useGetAcademicFacultiesQuery(undefined);
  const academicFacultyOptions = academicFacultyData?.data?.map((item) => ({
    value: item._id,
    label: item.name,
  }));
  const { data: academicDepartmentData } =
    useGetAcademicDepartmentsQuery(undefined);

  const { data: coursesData } = useGetAllCoursesQuery(undefined);

  const semesterRegistrationOptions = semesterRegistrationData?.data?.map(
    (item) => ({
      value: item._id,
      label: `${item.academicSemester.name} ${item.academicSemester.year}`,
    })
  );
  const academicDepartmentOptions = academicDepartmentData?.data?.map(
    (item) => ({
      value: item._id,
      label: item.name,
    })
  );
  const courseOptions = coursesData?.data?.map((item: TCourse) => ({
    value: item._id,
    label: item.title,
  }));

  const facultyOptions = facultiesData?.data?.map((item: TFaculty) => ({
    value: item._id,
    label: item.fullName,
  }));

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    const formData = data as TOfferedCourse;
    console.log(formData);
  };

  return (
    <Flex justify="center" align="center">
      <Col span={6}>
        <PHForm onSubmit={onSubmit}>
          <PHSelect
            name="semesterRegistration"
            label="Semester Registrations"
            options={semesterRegistrationOptions}
          />
          <PHSelect
            name="academicFaculty"
            label="Academic Faculty"
            options={academicFacultyOptions}
          />
          <PHSelect
            name="academicDepartment"
            label="Academic Department"
            options={academicDepartmentOptions}
          />
          <PHSelectWithWatch
            onValueChange={setCourseId}
            options={courseOptions}
            name="course"
            label="Course"
          />
          <PHSelect
            disabled={!courseId || fechingFaculties}
            name="faculty"
            label="Faculty"
            options={facultyOptions}
          />
          <PHInput type="text" name="section" label="Section" />
          <PHInput type="text" name="maxCapacity" label="Max Capacity" />
          <PHSelect
            mode="multiple"
            options={weekDaysOptions}
            name="days"
            label="Days"
          />
          <PHTimePicker name="startTime" label="Start Time" />
          <PHTimePicker name="endTime" label="End Time" />

          <Button htmlType="submit">Submit</Button>
        </PHForm>
      </Col>
    </Flex>
  );
};

export default OfferCourse;
