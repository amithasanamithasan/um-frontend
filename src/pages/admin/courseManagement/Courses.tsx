import { Button, Modal, Table } from "antd";
import { useGetAllCoursesQuery } from "../../../redux/features/admin/courseManagement";
import { useState } from "react";
import PHForm from "../../../components/form/PHForm";
import PHSelect from "../../../components/form/PHSelect";
import { useGetAllFacultiesQuery } from "../../../redux/features/admin/userManagement.Api";

type TCourse = {
  _id: string;
  title: string;
  prefix: string;
  code: number;
};

const AddFacultyModal = ({ data }) => {
  console.log(data.key);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { data: facultiesData } = useGetAllFacultiesQuery(undefined);
  const facultiesOptions = facultiesData?.data?.map((item) => ({
    value: item._id,
    label: item.fullName,
  }));

  const handelSubmit = (data) => {
    console.log(data);
  };
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Button onClick={showModal}>ADD Faculty</Button>
      <Modal
        title="Assign Faculty"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <PHForm onSubmit={handelSubmit}>
          <PHSelect
            mode="multiple"
            name="faculties"
            label="Faculty"
            options={facultiesOptions}
          />
          <Button htmlType="submit" type="primary">
            SUBMIT
          </Button>
        </PHForm>
      </Modal>
    </>
  );
};

const Courses = () => {
  // const [params, setParams] = useState<TQueryParam[] | undefined>(undefined);
  const { data: courses, isFetching } = useGetAllCoursesQuery(undefined);
  const tableData = courses?.data?.map(
    ({ _id, title, prefix, code }: TCourse) => ({
      key: _id,
      title,
      code: `${prefix}${code}`,
    })
  );

  const columns = [
    {
      title: "Title",
      key: "title",
      dataIndex: "title",
    },
    {
      title: "Code",
      key: "code",
      dataIndex: "code",
    },
    {
      title: "Action",
      key: "x",
      render: (item) => {
        return <AddFacultyModal data={item} />;
      },
    },
  ];

  // const onChange: TableProps<TTableData>['onChange'] = (
  //   _pagination,
  //   filters,
  //   _sorter,
  //   extra
  // ) => {
  //   if (extra.action === 'filter') {
  //     const queryParams: TQueryParam[] = [];
  //     setParams(queryParams);
  //   }
  // };

  return (
    <Table
      loading={isFetching}
      columns={columns}
      dataSource={tableData}
      // onChange={onChange}
    />
  );
};

export default Courses;
