import Button from "./Button";
import InputBox from "./InputBox";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import User from "./User";

function Users() {
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState("");
  // Debouncing
  useEffect(() => {
    const url = "http://localhost:3000/api/v1/user/bulk?filter=" + filter;
    axios
      .get(url, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((response) => {
        setUsers(response.data.users);
      });
  }, [filter]);

  const updateFilter = (evt) => {
    setFilter(evt.target.value);
  };

  return (
    <div className="p-1 space-y-3">
      <div>
        <InputBox
          id={"users"}
          label={"Users"}
          type={"text"}
          placeholder={"Search users..."}
          onChange={updateFilter}
        />
      </div>
      <div className="space-y-2">
        {users.map((user) => {
          return <User key={user._id} user={user} />;
        })}
      </div>
    </div>
  );
}

export default Users;
