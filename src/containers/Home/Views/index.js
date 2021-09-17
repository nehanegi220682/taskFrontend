import { React, useState } from "react";

import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import SideComp from "../../../components/SideComp";
import ExplorePeople from "../../ExplorePeople/Views";
import Feed from "../../Feed/Views";
import './style.css'

const Home = () => {

  const [tabIndex, setTabIndex] = useState(1)

  const handleTabChange = (idx) => {
      setTabIndex(idx)
  }

  return (
      <div className="homeWrapper">
      <SideComp handleTabChange={handleTabChange}/>
      {tabIndex == 1?
      <Feed />
        : <ExplorePeople />
      }
      </div>
      );
};

export default Home;
