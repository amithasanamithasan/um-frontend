/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button, Row } from "antd";
import { FieldValues } from "react-hook-form";

import { useAppDispatch } from "../redux/hooks";
import { setUser, TUser } from "../redux/features/auth/authSlice";
import { verifyToken } from "../utils/verifyToken";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

import PHForm from "../components/form/PHForm";
import PHInput from "../components/form/PHInput";
import { useLoginMutation } from "../redux/features/auth/authApi";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  // const { register, handleSubmit } = useForm({
  //   defaultValues: {
  //     userid: "A-0003",
  //     password: "amithasan123",
  //   },
  // });

  const defaultValues = {
    userId: "2030030002",
    password: "student12345",
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
      console.log(res);

      const user = verifyToken(res.data.accessToken) as unknown as TUser;
      dispatch(setUser({ user: user, token: res.data.accessToken }));

      toast.success("Logged in successfully", { id: toastId, duration: 2000 });
      navigate(`/${user.role}/dashboard`);
    } catch (err) {
      toast.error("Something went wrong", { id: toastId, duration: 2000 });
    }
  };
  return (
    <Row justify="center" align="middle" style={{ height: "100vh" }}>
      <PHForm onSubmit={onSubmit} defaultValues={defaultValues}>
        <PHInput type="text" name="userId" label="ID:" />
        <PHInput type="text" name="password" label="Password" />
        <Button htmlType="submit">Login</Button>
      </PHForm>
    </Row>
  );
};

export default Login;
