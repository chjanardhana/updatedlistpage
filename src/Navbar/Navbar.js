import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import * as routes from "../allRoutes";

const navBarList = [
  { id: 1, link: routes.home, item: "Home" },
  { id: 2, link: routes.models, item: "Models" },
  { id: 3, link: routes.riskMgmt, item: "Risk Management" },
  { id: 4, link: routes.posNegList, item: "Lists" },
  { id: 5, link: routes.org, item: "Organization" },
  { id: 6, link: routes.Users, item: "Users" },
  { id: 7, link: routes.guis, item: "GUIs" },
  { id: 8, link: routes.Reports, item: "Reports" },
  { id: 9, link: routes.documentation, item: "Documentation" },
  { id: 10, link: routes.support, item: "Support" },
];

const Navbar = () => {
  return (
    <div className="header">
      <img
        rel="noo"
        className="imgWidth"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQigwdP3C8WavDdPDs6J63nj_5_pIrjtrjOhw&usqp=CAU"
      />
      <p className="fnetName">FraudNet</p>
      <div className="nav-links">
        <ul>
          {navBarList.map((navitem) => (
            <>
              <Link to={navitem.link}>
                <li id={navitem.id}>{navitem.item}</li>
              </Link>
            </>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
