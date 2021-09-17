import React, { useState, useEffect } from "react";
import Post from "../../../components/Post";
import UploadStatus from "../../../components/UploadStatus";
import { getUserFeed, LogoutUser, uploadPost } from "../Request";
import "./style.css";
import { AiOutlineLogout } from "react-icons/ai";

const Feed = () => {
  const [feed, setFeed] = useState([]);

  const handlePostUpload = async (content) => {
    await uploadPost({ content: content });
    getFeeds();
  };

  const getFeeds = async () => {
    let { data } = await getUserFeed();
    setFeed(data);
  };

  const handleLogout = async () => {
    await LogoutUser();
  };

  useEffect(() => {
    getFeeds();
  }, []);

  return (
    <div className="feedCont">
      <div class="headingWrap">
        <h5>Home</h5>
        <div className="logout" onClick={(e) => handleLogout()}>
          <span>Logout&nbsp;</span>
          <AiOutlineLogout size={22} />
        </div>
      </div>
      <div className="statusFeedWrapper">
        <div className="postStatus">
          <UploadStatus handleUpload={handlePostUpload} />
        </div>
        <div className="feed">
          {feed &&
            feed.map((post) => {
              return <Post content={post.content} user={post.userID} />;
            })}
        </div>
      </div>
    </div>
  );
};

export default Feed;
