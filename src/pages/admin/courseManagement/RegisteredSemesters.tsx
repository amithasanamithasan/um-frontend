import { Dropdown, Table, TableColumnsType, Tag } from "antd";

import { useGetAllRegisteredSemestersQuery } from "../../../redux/features/admin/courseManagement";
import moment from "moment";
import { TSemester } from "../../../types";

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
  const handelStatusDropdown = ({ key }: { key: string }) => {
    console.log(key);
  };
  const menuProps = {
    items,
    onClick: handelStatusDropdown,
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
      render: () => {
        return (
          <div>
            <Dropdown menu={menuProps}>Update</Dropdown>
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
