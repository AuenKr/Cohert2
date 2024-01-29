import Heading from "../components/Heading";
import SubHeading from "../components/SubHeading";
import InputBox from "../components/InputBox";
import Button from "../components/Button";
import BottomWarning from "../components/BottomWarning";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Signin() {
  const [input, setInput] = useState({});
  const navigate = useNavigate();
  const userSignin = async () => {
    const response = await axios.post(
      "http://localhost:3000/api/v1/user/signin",
      input
    );
    const token = response.data.token;
    localStorage.setItem("token", "Bearer " + token);
    navigate("/dashboard");
  };
  return (
    <div className="bg-slate-100 h-screen flex justify-center items-center">
      <div className="flex flex-col items-center bg-white rounded-lg p-4 shadow-lg">
        <div className="w-[450px] space-y-2">
          <div className="flex flex-col items-center">
            <Heading label={"Sign in"} />
            <SubHeading
              label={"Enter your credentials to access your account"}
            />
          </div>
          <div>
            <InputBox
              id={"email"}
              label={"Email"}
              palceholder={"abc@gmail.com"}
              type={"email"}
              onChange={(e) => {
                setInput((prev) => {
                  return { ...prev, username: e.target.value };
                });
              }}
            ></InputBox>
            <InputBox
              id={"password"}
              label={"Password"}
              palceholder={"123456"}
              type={"password"}
              onChange={(e) => {
                setInput((prev) => {
                  return { ...prev, password: e.target.value };
                });
              }}
            ></InputBox>
          </div>
          <Button onClick={userSignin} label={"Sign up"} />
          <BottomWarning
            label={"Don't have an account?"}
            btnLabel={"Sign up"}
            to={"/signup"}
          />
        </div>
      </div>
    </div>
  );
}

export default Signin;
