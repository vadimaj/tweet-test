import { useState, useEffect, useCallback } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoadMoreBtn from "../../components/LoadMoreBtn";
import css from "./Users.module.css";
import {
  fetchUsers,
  USERS_PER_PAGE,
  USERS_TOTAL,
} from "../../services/usersAPI";
import Loader from "../../components/Loader";
import UserList from "../UserList";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [pending, setPending] = useState(false);

  const isEndOfCollection = useCallback(() => {
    return Math.ceil(USERS_TOTAL / USERS_PER_PAGE) === page;
  }, [page]);

  useEffect(() => {
    setPending(true);
    (async () => {
      const fetchResponse = await fetchUsers(page);
      if (!fetchResponse) {
        toast.info("No users was found");
      }

      setUsers((prevState) => [...prevState, ...fetchResponse]);

      if (isEndOfCollection()) toast.info("There are no more users to display");
      setPending(false);
    })();
  }, [page]);

  const handlePageIncrement = () => {
    setPage((prevState) => prevState + 1);
    console.log(page);
  };

  return (
    <section className={css["users-section"]}>
      <div className={css.container}>
        <UserList users={users} />
      </div>
      {!!users.length && !isEndOfCollection() && !pending && (
        <LoadMoreBtn onLoadMore={handlePageIncrement} />
      )}
      {pending && <Loader />}

      <ToastContainer />
    </section>
  );
};

export default Users;
