/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button } from "antd";
import { FieldValues, useForm } from "react-hook-form";

import { useAppDispatch } from "../redux/hooks";
import { setUser, TUser } from "../redux/features/auth/authSlice";
import { verifyToken } from "../utils/verifyToken";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useLoginMutation } from "../redux/features/auth/authApi";
import PHForm from "../components/form/PHForm";
import PHInput from "../components/form/PHInput";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  // const { register, handleSubmit } = useForm({
  //   defaultValues: {
  //     userid: "A-0003",
  //     password: "amithasan123",
  //   },
  // });

  const [login] = useLoginMutation();

  // console.log("data", data);
  // console.log("error", error);

  const onSubmit = async (data: FieldValues) => {
    console.log(data);
    // const toastId = toast.loading("logging in");

    // try {
    //   const userInfo = {
    //     id: data.userid,
    //     password: data.password,
    //   };
    //   const res = await login(userInfo).unwrap();
    //   const user = verifyToken(res.data.accessToken) as unknown as TUser;
    //   console.log(user);
    //   // console.log(res);
    //   dispatch(setUser({ user: user, token: res.data.accessToken }));
    //   toast.success("Logged in  ", { id: toastId, duration: 2000 });
    //   navigate(`/${user.role}/dashboard`);
    // } catch (err) {
    //   toast.error("Somthing Went Worng", { id: toastId, duration: 2000 });
    // }
  };
  return (
    <PHForm onSubmit={onSubmit}>
      <div>
        <PHInput type="text" name="userId" label="ID:" />
      </div>
      <div>
        <PHInput type="text" name="password" label="PASSWORD" />
      </div>
      <Button htmlType="submit">Login</Button>
    </PHForm>
  );
};

export default Login;
