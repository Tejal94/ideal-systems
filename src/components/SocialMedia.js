import React from "react";
import LinkedinIcon from "../assets/icons/linkedin.svg"
import FacebookIcon from "../assets/icons/facebook.svg"
import WhatsappIcon from "../assets/icons/whatsapp.svg"
import InstagramIcon from "../assets/icons/instagram.svg"

const SocialMedia = ({ topMargin }) => {
  return <div className={`flex flex-row gap-x-3 ${topMargin ? "my-2" : ""}`}>
    <a href="https://www.linkedin.com/in/ideal-systems-services-210a89152/" target="_blank"><img src={LinkedinIcon} className="self-center h-6 w-6"/></a>
    <a href="https://www.instagram.com/ideal_5654/" target="_blank"><img src={InstagramIcon} className="self-center h-6 w-6" /></a>
    <a href="https://www.facebook.com/profile.php?id=61554224054038" target="_blank"><img src={FacebookIcon} className="self-center h-6 w-6" /></a>
    <img src={WhatsappIcon} className="self-center h-6 w-6" />
  </div>;
};

export default SocialMedia;
