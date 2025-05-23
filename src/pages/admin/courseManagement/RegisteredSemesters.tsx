/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Dropdown, Table, TableColumnsType, Tag } from "antd";

import {
  useGetAllRegisteredSemestersQuery,
  useUpdateRegisteredSemesterMutation,
} from "../../../redux/features/admin/courseManagement";
import moment from "moment";
import { TSemester } from "../../../types";
import { useState } from "react";

export type TTableData = Pick<TSemester, "startDate" | "endDate" | "status">;

const items = [
  {
    label: <span style={{ color: "blue" }}>Upcoming</span>,
    key: "UPCOMING",
  },
  {
    label: <span style={{ color: "green" }}>Ongoing</span>,
    key: "ONGOING",
  },
  {
    label: <span style={{ color: "red" }}>Ended</span>,
    key: "ENDED",
  },
];

const RegisteredSemesters = () => {
  const [SemesterId, setSemesterId] = useState<string | null>(null);
  const [updateSemesterStatus] = useUpdateRegisteredSemesterMutation();
  console.log(SemesterId);
  const { data: semesterData, isFetching } =
    useGetAllRegisteredSemestersQuery(undefined);
  const tableData = semesterData?.data?.map(
    ({ _id, academicSemester, startDate, endDate, status }) => ({
      key: _id,
      name: `${academicSemester.name} ${academicSemester.year}`,
      startDate: moment(new Date(startDate)).format("MMMM"),
      endDate: moment(new Date(endDate)).format("MMMM"),
      status,
    })
  );
  const handelStatusUpdate = (data: any) => {
    // console.log("semester", SemesterId);
    // console.log("new status", data.key);
    const updateData = {
      id: SemesterId,
      data: {
        status: data.key,
      },
    };
    updateSemesterStatus(updateData);
  };
  const menuProps = {
    items,
    onClick: handelStatusUpdate,
  };
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
      render: (item: string) => {
        if (item === "UPCOMING") {
          return <Tag color="blue">{item}</Tag>;
        } else if (item === "ONGOING") {
          return <Tag color="green">{item}</Tag>;
        } else if (item === "ENDED") {
          return <Tag color="red">{item}</Tag>;
        }
      },
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
      render: (item) => {
        return (
          <div>
            <Dropdown menu={menuProps} trigger={["click"]}>
              <Button onClick={() => setSemesterId(item.key)}>UPDATE</Button>
            </Dropdown>
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
