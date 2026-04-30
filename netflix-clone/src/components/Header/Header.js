import React, { useEffect, useState } from "react";
import "./header.css";
import netflixLogo from "../../assets/images/netflix-logo.jpg";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`header_outer_container ${isScrolled ? "header_scrolled" : ""}`}
    >
      <div className="header_inner_container">
        <div className="header_left">
          <ul aria-label="Primary navigation">
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
          <ul aria-label="Header actions">
            <li>
              <SearchIcon />
            </li>
            <li>
              <NotificationsNoneIcon />
            </li>
            <li>
              <AccountBoxIcon />
            </li>
            <li>
              <ArrowDropDownIcon />
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
