import React, { useState } from "react";
import { BsFillHouseDoorFill, BsFillPersonFill } from "react-icons/bs";
import MenuItem from "./menuItem";
import "./style.css";

const SideComp = (props) => {
  const [tab, setTab] = useState(1);

  const handleTabClick = (tab) => {
    setTab(tab);
    props && props.handleTabChange(tab);
  };
  return (
    <div className="sidebar">
      <MenuItem
        onClick={() => handleTabClick(1)}
        icon={
          <BsFillHouseDoorFill
            size={22}
            color={tab == 1 ? "black" : "#504545"}
          />
        }
        name={"Home"}
        selected={tab == 1 ? true : false}
      />
      <MenuItem
        onClick={() => handleTabClick(2)}
        icon={
          <BsFillPersonFill size={22} color={tab == 2 ? "black" : "#504545"} />
        }
        name={"People"}
        selected={tab == 2 ? true : false}
      />
    </div>
  );
};
export default SideComp;
