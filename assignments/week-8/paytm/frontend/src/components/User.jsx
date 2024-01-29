import { useNavigate } from "react-router-dom";
import Button from "./Button";

function User({ user }) {
  const navigate = useNavigate();
  const sendMoneyPage = () => {
    navigate(
      `/send?to=${user._id}&&firstName=${user.firstName}&&lastName=${user.lastName}`
    );
  };
  return (
    <div className="flex justify-between">
      <div className="flex items-center">
        <div className="text-lg mr-1 px-2 border-2 bg-slate-300 rounded-full flex justify-center items-center">
          {user.firstName[0]}
        </div>
        <div className="font-medium">
          {user.firstName} {user.lastName}
        </div>
      </div>
      <div>
        <Button onClick={sendMoneyPage} label={"Send Money"}></Button>
      </div>
    </div>
  );
}

export default User;
