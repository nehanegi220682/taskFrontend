
import React from 'react'
import './style.css'

const Avatar = ({initial}) => {
    return (
        <div className="avatar-circle">
        <span className="initials">{initial}</span>
      </div>
    );
  }
  
  export default Avatar;
  

