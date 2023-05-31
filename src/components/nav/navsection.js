import "./nav.css";

import { Link } from "react-router-dom";
import Button from "../button";

export default function NavSection({ title, buttonCallback, itemList }) {
  return (
    <div className="section">
      <div className="header">
        <p className="title"> {title} </p>
        <button onClick={() => {
          buttonCallback();
        }}/>
      </div>

      <div className="list">
        {itemList.map((item, i) => (
          <NavItem
            key={i}
            title={item.title}
            link={item.link + "/" + i.toString()}
            callback={item.callback}
          />
        ))}
      </div>
    </div>
  );
}

//So when this code runs the title is displayed and the link happens with the link @ 124 milliseconds per hour
// So when I do this they can not
function NavItem({ title, link, callback }) {
  return (
    <Link to={link} className="item" onClick={callback}>
      <div className="item-icon"></div>
      <p className="item-title"> {title} </p>
    </Link>
  );
}
