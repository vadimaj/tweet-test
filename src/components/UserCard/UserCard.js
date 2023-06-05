import { useState } from "react";
import { updateUser } from "../../services/usersAPI";
import PropTypes from "prop-types";
import cardImage from "../../images/card-image.png";
import logo from "../../images/logo.svg";
import css from "./UserCard.module.css";

const UserCard = (props) => {
  const { followers, avatar, tweets, user, following, id } = props;

  const [isFollowing, setIsFollowing] = useState(following);

  const [followersNumber, setFollowersNumber] = useState(followers);

  function _getStyles(isFollowing) {
    if (isFollowing) {
      return {
        backgroundColor: "#5CD3A8",
      };
    }
    return {
      backgroundColor: "#ebd8ff",
    };
  }

  const handleBtnChange = () => {
    if (!isFollowing) {
      setFollowersNumber(followersNumber + 1);
      updateUser(id, {
        following: true,
        followers: followersNumber,
      });
    } else {
      setFollowersNumber(followersNumber - 1);
      updateUser(id, {
        following: false,
        followers: followersNumber,
      });
    }
    setIsFollowing(!isFollowing);
  };

  function convertFollowers(followers) {
    if (followers.length < 4) {
      return followers;
    }
    return followers.slice(0, -3) + "," + followers.slice(-3);
  }

  return (
    <li className={css["card-item"]}>
      <div className={css.card}>
        <img src={logo} className={css["card-logo"]} alt="logo" />
        <img
          src={cardImage}
          className={css["card-bgImage"]}
          alt="Background image"
        />

        <div className={css["user-image-wrapper"]}>
          <div className={css["horizontal-bar"]} />
          <div className={css["userImg-border"]}>
            <img
              src={avatar}
              className={css["user-image"]}
              alt={user}
              width={62}
              height={62}
            />
          </div>
        </div>
        <div className={css["card-meta"]}>
          <p className={`${css["card-text"]} ${css["card-tweets"]}`}>
            {tweets} Tweets
          </p>
          <p className={`${css["card-text"]} ${css["card-followers"]}`}>
            {convertFollowers(String(followersNumber))} Followers
          </p>
          <button
            type="button"
            className={css["btn"]}
            style={_getStyles(isFollowing)}
            onClick={handleBtnChange}
          >
            {isFollowing ? "Following" : "Follow"}
          </button>
        </div>
      </div>
    </li>
  );
};
UserCard.propTypes = {
  followers: PropTypes.number.isRequired,
  avatar: PropTypes.string.isRequired,
  tweets: PropTypes.number.isRequired,
  user: PropTypes.string.isRequired,
  following: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
};

export default UserCard;
