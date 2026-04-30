import React from "react";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import "./Footer.css";
function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer_outer_container">
      <div className="footer_inner_container">
        <div className="footer_social" aria-label="Social links">
          <button
            type="button"
            className="footer_social_button"
            aria-label="Facebook"
          >
            <FacebookOutlinedIcon />
          </button>
          <button
            type="button"
            className="footer_social_button"
            aria-label="YouTube"
          >
            <YouTubeIcon />
          </button>
          <button
            type="button"
            className="footer_social_button"
            aria-label="Instagram"
          >
            <InstagramIcon />
          </button>
        </div>

        <div className="footer_links" aria-label="Footer links">
          <ul>
            <li>
              <button type="button" className="footer_link">
                Audio and Subtitles
              </button>
            </li>
            <li>
              <button type="button" className="footer_link">
                Audio Description
              </button>
            </li>
            <li>
              <button type="button" className="footer_link">
                Help Center
              </button>
            </li>
          </ul>

          <ul>
            <li>
              <button type="button" className="footer_link">
                Gift Cards
              </button>
            </li>
            <li>
              <button type="button" className="footer_link">
                Media Center
              </button>
            </li>
            <li>
              <button type="button" className="footer_link">
                Investor Relations
              </button>
            </li>
            <li>
              <button type="button" className="footer_link">
                Jobs
              </button>
            </li>
          </ul>

          <ul>
            <li>
              <button type="button" className="footer_link">
                Terms of Use
              </button>
            </li>
            <li>
              <button type="button" className="footer_link">
                Privacy
              </button>
            </li>
            <li>
              <button type="button" className="footer_link">
                Legal Notices
              </button>
            </li>
          </ul>

          <ul>
            <li>
              <button type="button" className="footer_link">
                Cookie Preferences
              </button>
            </li>
            <li>
              <button type="button" className="footer_link">
                Corporate Information
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer_bottom">
        <p>&copy; {year} Netflix App. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
