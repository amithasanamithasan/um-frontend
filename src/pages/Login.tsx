/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button, Row, Card, Typography, Col } from "antd";
import { FieldValues } from "react-hook-form";

import { useAppDispatch } from "../redux/hooks";
import { setUser, TUser } from "../redux/features/auth/authSlice";
import { verifyToken } from "../utils/verifyToken";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

import PHForm from "../components/form/PHForm";
import PHInput from "../components/form/PHInput";
import { useLoginMutation } from "../redux/features/auth/authApi";
import Lottie from "react-lottie";
import animationData from "../../Animation - 1747316441549.json";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  // const { register, handleSubmit } = useForm({
  //   defaultValues: {
  //     userid: "A-0003",
  //     password: "amithasan123",
  //   },
  // });

  // const defaultValues = {
  //   userId: "2030030002",
  //   password: "student12345",
  // };
  const defaultValues = {
    userId: "2030030001",
    password: "student1234",
  };
  console.log(defaultValues);
  const [login] = useLoginMutation();

  // console.log("data", data);
  // console.log("error", error);

  const onSubmit = async (data: FieldValues) => {
    console.log(data);
    const toastId = toast.loading("logging in");

    try {
      const userInfo = {
        id: data.userId,
        password: data.password,
      };

      const res = await login(userInfo).unwrap();

      const user = verifyToken(res.data.accessToken) as unknown as TUser;
      dispatch(setUser({ user: user, token: res.data.accessToken }));
      if (res.data.needsPasswordChange) {
        navigate(`/change-password`);
      } else {
        navigate(`/${user.role}/dashboard`);
      }

      toast.success("Logged in successfully", { id: toastId, duration: 2000 });
    } catch (err) {
      toast.error("Something went wrong", { id: toastId, duration: 2000 });
    }
  };

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Row
      justify="center"
      align="middle"
      style={{ minHeight: "100vh", background: "#cce6e5", padding: "20px" }}
    >
      <Col
        xs={24}
        sm={24}
        md={20}
        lg={18}
        xl={16}
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-between",
          gap: "15px",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "50%",
            maxWidth: "400px",
            order: 1,
          }}
        >
          {animationData && (
            <Lottie
              options={defaultOptions}
              height={window.innerWidth < 768 ? 250 : 400}
              width={window.innerWidth < 768 ? 250 : 400}
              isClickToPauseDisabled={true}
            />
          )}
        </div>

        <Card
          style={{
            width: "45%",
            maxWidth: "400px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            borderRadius: "8px",
            background: "white",
            order: 2,
          }}
        >
          <div style={{ textAlign: "center", marginBottom: "24px" }}>
            <Typography.Title level={2}>Login</Typography.Title>
            <Typography.Text type="secondary">
              Please Enter Your ID And Password To Continue
            </Typography.Text>
          </div>

          <PHForm onSubmit={onSubmit} defaultValues={defaultValues}>
            <PHInput type="text" name="userId" label="ID" />
            <PHInput type="password" name="password" label="Password" />
            <Button
              type="primary"
              htmlType="submit"
              style={{ width: "100%", marginTop: "16px" }}
            >
              Login
            </Button>
          </PHForm>
        </Card>
      </Col>
    </Row>
  );
};

export default Login;
