import Heading from "../components/Heading";
import SubHeading from "../components/SubHeading";
import InputBox from "../components/InputBox";
import Button from "../components/Button";
import BottomWarning from "../components/BottomWarning";
import { useState } from "react";

import axios from "axios";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [input, setInput] = useState({});
  const navigate = useNavigate();
  const userSignup = async () => {
    const response = await axios.post(
      "http://localhost:3000/api/v1/user/signup",
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
            <Heading label={"Sign up"} />
            <SubHeading label={"Enter your information to create an account"} />
          </div>
          <div>
            <InputBox
              onChange={(e) => {
                setInput((prev) => {
                  return { ...prev, firstName: e.target.value };
                });
              }}
              id={"firstName"}
              label={"First Name"}
              palceholder={"John"}
              type={"text"}
            ></InputBox>
            <InputBox
              onChange={(e) => {
                setInput((prev) => {
                  return { ...prev, lastName: e.target.value };
                });
              }}
              id={"lastName"}
              label={"Last Name"}
              palceholder={"Doe"}
              type={"text"}
            ></InputBox>
            <InputBox
              onChange={(e) => {
                setInput((prev) => {
                  return { ...prev, username: e.target.value };
                });
              }}
              id={"email"}
              label={"Email"}
              palceholder={"abc@gmail.com"}
              type={"email"}
            ></InputBox>
            <InputBox
              onChange={(e) => {
                setInput((prev) => {
                  return { ...prev, password: e.target.value };
                });
              }}
              id={"password"}
              label={"Password"}
              palceholder={"123456"}
              type={"password"}
            ></InputBox>
          </div>
          <Button onClick={userSignup} label={"Sign up"} />
          <BottomWarning
            label={"Already have an account?"}
            btnLabel={"Sign in"}
            to={"/signin"}
          />
        </div>
      </div>
    </div>
  );
}

export default Signup;
