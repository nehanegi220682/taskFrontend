import React from "react";
import Avatar from "../Avatar";
import RoundedBtn from "../RoundedBtn";
import "./style.css";

export default function ProfileCard({
  name,
  email,
  isFollowing,
  id,
  handleFollow,
  handleUnfollow,
}) {
  const handleClick = () => {
    if (isFollowing) {
      handleUnfollow && handleUnfollow(id);
    } else {
      handleFollow && handleFollow(id);
    }
  };

  return (
    <div className="profileWrap ">
      <div>
        <Avatar initial={name[0]} />
      </div>
      <div className="flex">
        <div className="info">
          <b>{name}</b>
          <p>{email}</p>
        </div>
        <div className="btnWrapper">
          <RoundedBtn
            text={isFollowing ? "UnFollow" : "Follow"}
            handleClick={handleClick}
          />
        </div>
      </div>
    </div>
  );
}
