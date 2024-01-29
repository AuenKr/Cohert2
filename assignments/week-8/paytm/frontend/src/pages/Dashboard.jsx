import { useEffect, useState } from "react";
import Appbar from "../components/Appbar";
import Balance from "../components/Balance";
import Users from "../components/Users";
import axios from "axios";

function Dashboard() {
  const [balance, setBalance] = useState(0);
  useEffect(() => {
    axios
      .get("http://localhost:3000/api/v1/account/balance", {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((response) => {
        setBalance(response.data.balance);
      });
  }, []);
  return (
    <div className="h-screen bg-slate-50">
      <div className="space-y-2">
        <div>
          <Appbar username={"AuenKr"} />
        </div>
        <div className="m-2">
          <Balance amount={balance} />
        </div>
        <div className="m-2">
          <Users />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
