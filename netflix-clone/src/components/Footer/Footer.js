import React from "react";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import "./Footer.css";
function Footer() {
  return (
    <div className="footer_outer_container">
      <div className="footer_inner_container">
        <div className="first-div">
          <ul>
            <li className="social-icons">
              <FacebookOutlinedIcon />
              <SubscriptionsOutlinedIcon />
              <SubscriptionsOutlinedIcon />
            </li>
            <li>Audio and Subtitles</li>
            <li>Audio Description</li>
            <li>Help Center</li>
          </ul>
        </div>
        <div className="second-div">
          <ul>
            <li>Gift Cards</li>
            <li>Media Center</li>
            <li>Investor Relations</li>
            <li>Jobs</li>
          </ul>
        </div>
        <div className="third-div">
          <ul>
            <li>Terms of Use</li>
            <li>Privacy</li>
            <li>Legal Notices</li>
          </ul>
        </div>
        <div className="fourth-div">
          <ul>
            <li>Cookie Preferences</li>
            <li>Corporate Information</li>
          </ul>
        </div>
      </div>
      <div className="fifth-div">
        <p>&copy; 2024 Netflix App. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
