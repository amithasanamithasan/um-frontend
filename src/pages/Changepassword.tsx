import { Button, Card, message } from "antd";
import PHForm from "../components/form/PHForm";
import PHInput from "../components/form/PHInput";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { useChangePasswordMutation } from "../redux/features/admin/userManagement.Api";
import { useDispatch } from "react-redux";
import { logout } from "../redux/features/auth/authSlice";
import { useNavigate } from "react-router-dom";

const Changepassword = () => {
  const [changePassword, { isLoading }] = useChangePasswordMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    console.log(data);
    const res = await changePassword(data);
    if (res?.data?.success) {
      dispatch(logout());
      navigate("/login");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <Card style={{ width: 400, border: "1px solid #000" }}>
        <PHForm onSubmit={onSubmit}>
          <PHInput type="password" name="oldPassword" label="Old Password" />
          <PHInput type="password" name="newPassword" label="New Password" />
          <Button
            type="primary"
            htmlType="submit"
            style={{ width: "100%", marginTop: "16px" }}
          >
            Change Password
          </Button>
        </PHForm>
      </Card>
    </div>
  );
};

export default Changepassword;
