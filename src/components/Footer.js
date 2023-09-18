import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faInstagram,
  faGithub,
  faLinkedinIn,
  faFacebookF,
} from '@fortawesome/free-brands-svg-icons';
import { faArrowRight as solidArrowRight } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer>
      <div className="footer_sec_outterwrap site_container">
        <div className="footer_block">
          <h2>let's Work Together</h2>
          <p>I am available for full-time work</p>
          <div className="footer_btn">
            <a href="#">
              Say Hello <FontAwesomeIcon icon={solidArrowRight} />
            </a>
          </div>
        </div>
        <div className="copy_right">
          <p>&copy; {new Date().getFullYear()} - All rights reserved @ Ghayoor Ul Baqir</p>
          <span>|</span>
          <div className="footer_social_links">
            <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="#"><FontAwesomeIcon icon={faGithub} /></a>
            <a href="#"><FontAwesomeIcon icon={faLinkedinIn} /></a>
            <a href="#"><FontAwesomeIcon icon={faFacebookF} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
