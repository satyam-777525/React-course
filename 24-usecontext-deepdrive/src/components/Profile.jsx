import { useContext } from "react";
import { UserContext } from "../context/UserContext";

function Profile() {

  const user = useContext(UserContext);

  return (
    <div>
      <h2>Name: {user.name}</h2>
      <h2>Age: {user.age}</h2>
    </div>
  );
}

export default Profile;