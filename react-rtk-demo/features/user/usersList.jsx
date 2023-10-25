import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "./userSlice";
const UsersList = () => {
  const users = useSelector((state) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);
  return (
    <>
      <h2>List of users:</h2>
      {users.loading ? "loading...." : null}
      {users.error ? (<h4>{users.error}</h4>):null}
      {users.data && (<ul>
        {users.data.map((user)=> (<li key={user.id}>{user.name}</li>))}
      </ul>)}
    </>
  );
};

export default UsersList;
