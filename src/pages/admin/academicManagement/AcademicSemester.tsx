import { useGetAllSemesterQuery } from "../../../redux/features/academicSemester/academicSemesterApi";

const AcademicSemester = () => {
  const { data } = useGetAllSemesterQuery(undefined);
  console.log(data);

  return (
    <div>
      <h1>This is Academic Semester userinfo</h1>
    </div>
  );
};

export default AcademicSemester;
