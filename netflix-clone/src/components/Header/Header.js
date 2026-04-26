import React from "react";
import "./header.css";
import netflixLogo from "../../assets/images/netflix-logo.jpg";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
const Header = () => {
  return (
    <div className="header_outer_container">
      <div className="header_inner_container">
        <div className="header_left">
          <ul>
            <li>
              <img
                src={netflixLogo}
                alt="netflix logo"
                className="netflix_logo"
              />
            </li>
            <li>Home</li>
            <li>TV Shows</li>
            <li>Movies</li>
            <li>New & Popular</li>
            <li>Latest</li>
            <li>Browse by Languages</li>
            <li>Help</li>
          </ul>
        </div>
        <div className="header_right">
          <ul>
            <li><SearchIcon /></li>
            <li><NotificationsNoneIcon /></li>
            <li><AccountBoxIcon /></li>
            <li><ArrowDropDownIcon /></li>
          </ul>
          
        </div>
      </div>
    </div>
  );
};

export default Header;
