import { useNavigate, useSearchParams } from "react-router-dom";
import Button from "../components/Button";
import Heading from "../components/Heading";
import InputBox from "../components/InputBox";
import { useState } from "react";
import axios from "axios";

function SendMoney() {
  const [amount, setAmount] = useState(0);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const user =
    searchParams.get("firstName") + " " + searchParams.get("lastName");

  const inputHandler = (evt) => {
    setAmount(evt.target.value);
  };

  const sendMoneyHandler = async () => {
    const to = searchParams.get("to");
    const amountInt = parseInt(amount);
    axios
      .post(
        "http://localhost:3000/api/v1/account/transfer",
        {
          to,
          amount: amountInt,
        },
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      )
      .then((response) => {
        alert(`${response.data.message}\nBalance : ${response.data.balance}`);
        navigate("/dashboard");
      })
      .catch((err) => {
        alert(`${err.response.data.message}\nBalance : ${err.response.data.balance}`);
      });
  };
  
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-slate-100">
      <div className="p-3 w-[450px] space-y-3 bg-white rounded-lg shadow-lg">
        <div>
          <Heading label={"Send Money"} />
        </div>
        <div className="flex">
          <div className="mx-1 px-2 border-2 bg-green-500 text-white rounded-full flex justify-center items-center">
            {user[0]}
          </div>
          <div className="font-medium">{user}</div>
        </div>
        <div>
          <InputBox
            id={"amount"}
            label={"Amount (in ₹)"}
            type={"number"}
            placeholder={"Enter Amount"}
            onChange={inputHandler}
          />
        </div>
        <div>
          <Button onClick={sendMoneyHandler} label={"Initiate Transfer"} />
        </div>
      </div>
    </div>
  );
}

export default SendMoney;
