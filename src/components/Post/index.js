import React from "react";
import Avatar from "../Avatar";
import "./style.css";

export default function Post({
 content,
 user
}) {
  
  return (
    <div className="flex postCont">
      <div>
        <Avatar initial={user && user.name[0]} />
      </div>
      <div className="contentWrap">
        <div>
       <b>{user.name}</b>
       <small className='email'>{user.email}</small>
       </div>
       <div>
           <p>{content}</p>
       </div>
      </div>
    </div>
  );
}
