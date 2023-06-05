import React from "react";
import PropTypes from "prop-types";
import { nanoid } from "nanoid";
import css from "./UserList.module.css";
import UserCard from "../UserCard";

const UserList = (props) => {
  const { users } = props;

  return (
    <ul className={css.cards}>
      {users.map(({ followers, avatar, tweets, user: name, id, following }) => (
        <UserCard
          followers={followers}
          key={nanoid()}
          avatar={avatar}
          tweets={tweets}
          user={name}
          id={id}
          following={following}
        />
      ))}
    </ul>
  );
};

UserList.propTypes = {
  gallery: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      previewURL: PropTypes.string.isRequired,
      webformatURL: PropTypes.string.isRequired,
    })
  ),
};

export default UserList;
