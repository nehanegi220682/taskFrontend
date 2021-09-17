import React, { useEffect, useState } from "react";
import ProfileCard from "../../../components/ProfileCard";
import { addFollowing, deleteFollowing, fetchPeopleList } from "../Request";
import './style.css'

const ExplorePeople = () => {
  const [people, setPeople] = useState([]);

  const fetchPeople = async () => {
    let { data: people } = await fetchPeopleList();
    setPeople(people);
  };

  useEffect(() => {
    fetchPeople();
  }, []);

  const followUser = async(id) => {
    await addFollowing({
      toFollowID: id,
    });
    fetchPeople();
  };
  const unfollowUser = async(id) => {
    await deleteFollowing({
      toUnFollowID: id,
    });
    fetchPeople();
  };

  return (
    <div className="feedCont">
         <div className='heading'>
                <h5>Explore</h5>
            </div>
        <div className='profilesCont'>
      {people.map((user) => (
        <ProfileCard
          handleFollow={followUser}
          handleUnfollow={unfollowUser}
          key={user._id}
          id={user._id}
          name={user.name}
          isFollowing={user.isFollowing}
          email={user.email}
        />
      ))}
      </div>
    </div>
  );
};

export default ExplorePeople;
