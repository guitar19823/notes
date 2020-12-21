import { useState } from 'react';
import './index.css';

const PopMenu = props => {
  const [ coords, setCoords ] = useState(null);

  const handleMouseEnter = e => {
    setCoords({
      top: e.clientY,
    });
  };

  return (
    <div
      className="PopMenu"
      onMouseEnter={handleMouseEnter}
    >
      <div className="PopMenu_button">
        <div/><div/><div/>
      </div>
      
      <figure
        className="PopMenu_list"
        style={coords}
      >
        {props.children}
      </figure>
    </div>
  );
};

export default PopMenu;