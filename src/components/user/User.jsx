import { useSelector } from "react-redux";
import { useActions } from "../../hooks/useActions";

export function User() {
  const { isLoading, error, user } = useSelector((state) => state.user);

  const { getUserById } = useActions();

  return (
    <div>
      <button onClick={() => getUserById()}>Get User</button>
      {isLoading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h2>Error: {error}</h2>
      ) : user?.name ? (
        <h2>User: {user.name}</h2>
      ) : (
        <h2>User not found</h2>
      )}
    </div>
  );
}
