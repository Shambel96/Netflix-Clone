import React, { useEffect, useState } from "react";
import "./header.css";
import netflixLogo from "../../assets/images/netflix-logo.jpg";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 900) setIsMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const navItems = [
    "Home",
    "TV Shows",
    "Movies",
    "New & Popular",
    "Latest",
    "Browse by Languages",
    "Help",
  ];

  return (
    <>
      {isMenuOpen && (
        <button
          type="button"
          className="header_backdrop"
          aria-label="Close menu"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
      <header
        className={`header_outer_container ${isScrolled ? "header_scrolled" : ""}`}
      >
        <div className="header_inner_container">
          <div className="header_left">
            <img src={netflixLogo} alt="Netflix" className="netflix_logo" />

            <nav
              className={`header_nav ${isMenuOpen ? "header_nav_open" : ""}`}
              aria-label="Primary navigation"
            >
              <ul className="header_nav_list">
                {navItems.map((label) => (
                  <li key={label} className="header_nav_item">
                    <button
                      type="button"
                      className="header_nav_link"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {label}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="header_right" aria-label="Header actions">
            <button type="button" className="header_icon_button" aria-label="Search">
              <SearchIcon />
            </button>
            <button
              type="button"
              className="header_icon_button header_desktop_only"
              aria-label="Notifications"
            >
              <NotificationsNoneIcon />
            </button>
            <button
              type="button"
              className="header_icon_button header_desktop_only"
              aria-label="Account"
            >
              <AccountBoxIcon />
            </button>
            <button
              type="button"
              className="header_icon_button header_desktop_only"
              aria-label="More"
            >
              <ArrowDropDownIcon />
            </button>

            <button
              type="button"
              className="header_icon_button header_mobile_only"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
              onClick={() => setIsMenuOpen((open) => !open)}
            >
              {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
