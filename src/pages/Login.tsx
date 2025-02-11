import { Button } from "antd";
import { useForm } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/authApi";

const Login = () => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      userid: "A-0003",
      password: "amithasan123",
    },
  });

  const [login, { data, error }] = useLoginMutation();
  console.log("data", data);
  console.log("error", error);

  const onSubmit = (data) => {
    console.log(data);
    const userInfo = {
      id: data.userid,
      password: data.password,
    };
    login(userInfo);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="id">Id:</label>
        <input type="text" id="id" {...register("userid")}></input>
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input type="text" id="password" {...register("password")}></input>
      </div>
      <Button htmlType="submit">Login</Button>
    </form>
  );
};

export default Login;
