import React from 'react'

function MenuItem({icon, name, selected, onClick}) {
    return (
      <div className={'menuItem'} onClick={onClick}>
        {icon}
        <p className={selected?'activeMenuText':'menuText'}>{name}</p>
      </div>
    );
  }
  
  export default MenuItem;
  