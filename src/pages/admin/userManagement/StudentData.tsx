import { Button, Space, Table, TableColumnsType, TableProps } from "antd";

import { useState } from "react";
import { TQueryParams, TStudent } from "../../../types";

import { useGetAllStudetsQuery } from "../../../redux/features/admin/userManagement.Api";
export type TTableData = Pick<TStudent, "name" | "id">;
const StudentData = () => {
  const [params, setParams] = useState<TQueryParams[] | undefined>(undefined);
  // const { data: semesterData } = useGetAllSemesterQuery([
  //   { name: "name", value: "Summer" },
  // ]);
  const {
    data: studentData,
    isLoading,
    isFetching,
  } = useGetAllStudetsQuery(params);

  const tableData = studentData?.data?.map(({ _id, fullName, id }) => ({
    key: _id,
    fullName,
    id,
  }));

  const columns: TableColumnsType<TTableData> = [
    {
      title: "Name",
      key: "Name",
      dataIndex: "fullName",
      filters: [
        {
          text: "Autumn",
          value: "Autumn",
        },
        {
          text: "Fall",
          value: "Fall",
        },
        {
          text: "Summer",
          value: "Summer",
        },
      ],
    },

    {
      title: "Roll No",
      key: "id",
      dataIndex: "id",
    },

    {
      title: "Action",
      key: "x",
      render: () => {
        return (
          <Space>
            <Button>Details</Button>
            <Button>Update</Button>
            <Button>Block</Button>
          </Space>
        );
      },
      width: "1%",
    },
  ];

  const onChange: TableProps<TTableData>["onChange"] = (
    _pagination,
    filters,
    _sorter,
    extra
  ) => {
    // console.log({ pagination, filters, sorter, extra });
    if (extra.action == "filter") {
      const queryParams: TQueryParams[] = [];
      filters?.name?.forEach((item) =>
        queryParams.push({ name: "name", value: item })
      );
      filters?.year?.forEach((item) =>
        queryParams.push({ name: "year", value: item })
      );
      // console.log(queryParams);
      setParams(queryParams);
    }
  };
  if (isLoading) {
    return <p>Loading</p>;
  }
  if (isFetching) {
    return <div>Refreshing data...</div>;
  }
  return (
    <Table
      loading={isFetching}
      columns={columns}
      dataSource={tableData}
      onChange={onChange}
    />
  );
};

export default StudentData;
