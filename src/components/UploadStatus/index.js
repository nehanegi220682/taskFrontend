// import { Avatar } from "@material-ui/core";
// import {
//   ChatBubbleOutline,
//   FavoriteBorder,
//   Publish,
//   Repeat,
//   VerifiedUser,
// } from "@material-ui/icons";
import React, {useState} from "react";
import Avatar from "../Avatar";
import "./style.css";

const UploadStatus = ({ avatar, handleUpload }) =>{

   const [content, setContent] = useState("");
  const sendTweet = (e) => {
    e.preventDefault();
    handleUpload && handleUpload(content);
    setContent("");
  };
  let userName = localStorage.getItem('userName')
  return (
    <div className="statusBox">
      <form className="status">
        <div className="statusInput">
            <Avatar initial={userName && userName[0]}/>
          <input
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="What's happening?"
            type="text"
          />
        <button onClick={sendTweet} type="submit" className="postBtn">
          Post
        </button>
        </div>

      </form>
    </div>
  );
}

export default UploadStatus;
