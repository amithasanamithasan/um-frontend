import { Button, Table, TableColumnsType, TableProps } from "antd";

import { TAcademicSemester } from "../../../types/academicManagement.type";
import { useGetAllRegisteredSemestersQuery } from "../../../redux/features/admin/courseManagement";
import moment from "moment";

export type TTableData = Pick<
  TAcademicSemester,
  "name" | "year" | "startMonth" | "endMonth"
>;
const RegisteredSemesters = () => {
  // const [params, setParams] = useState<TQueryParams[] | undefined>(undefined);
  // const { data: semesterData } = useGetAllSemesterQuery([
  //   { name: "name", value: "Summer" },
  // ]);
  const {
    data: semesterData,
    isLoading,
    isFetching,
  } = useGetAllRegisteredSemestersQuery(undefined);
  const tableData = semesterData?.data?.map(
    ({ _id, academicSemester, startDate, endDate, status }) => ({
      key: _id,
      name: `${academicSemester.name} ${academicSemester.year}`,
      startDate: moment(new Date(startDate)).format("MMMM"),
      endDate: moment(new Date(endDate)).format("MMMM"),
      status,
    })
  );

  const columns: TableColumnsType<TTableData> = [
    {
      title: "Name",
      key: "name",
      dataIndex: "name",
    },
    {
      title: "Status",
      key: "status",
      dataIndex: "status",
    },
    {
      title: "Start Date",
      key: "startDate",
      dataIndex: "startDate",
    },
    {
      title: "End Date",
      key: "endDate",
      dataIndex: "endDate",
    },
    {
      title: "Action",
      key: "x",
      render: () => {
        return (
          <div>
            <Button>Update</Button>
          </div>
        );
      },
    },
  ];

  // const onChange: TableProps<TTableData>["onChange"] = (
  //   _pagination,
  //   filters,
  //   _sorter,
  //   extra
  // ) => {
  //   // console.log({ pagination, filters, sorter, extra });
  //   if (extra.action == "filter") {
  //     const queryParams: TQueryParams[] = [];

  //     // console.log(queryParams);
  //     setParams(queryParams);
  //   }
  // };
  // if (isLoading) {
  //   return <p>Loading</p>;
  // }
  // if (isFetching) {
  //   return <div>Refreshing data...</div>;
  // }
  return (
    <Table
      loading={isFetching}
      columns={columns}
      dataSource={tableData}
      // onChange={onChange}
    />
  );
};

export default RegisteredSemesters;
