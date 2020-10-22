import React from "react";
import resume from "../assets/Wilson_Birch_Resume.pdf"
import { Email, PhoneAndroid, Description } from '@material-ui/icons';


function Footer() {
  return (
    <footer id="footer">
    <Email fontSize="small"></Email>: wilsonbirch@gmail.com 
    <PhoneAndroid fontSize="small"></PhoneAndroid>: 613-229-4163
    <Description fontSize="small"></Description>: <a href = {resume} target = "_blank" rel="noopener noreferrer" className="card-link text-primary" id="resume">Resume</a>

  </footer> 
  );
}

export default Footer;