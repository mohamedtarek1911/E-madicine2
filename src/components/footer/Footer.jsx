import React from "react";
import { AiFillTwitterCircle, AiFillLinkedin } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";

export const Footer = () => {
  return (
    <>
      <footer className="boxItems">
        <div className="container flex">
          <p>
            Cartsy Medicine - All right reserved - Developed by Mohamed Tarek
            2023 ,Inc
          </p>
          <div className="social">
            <BsFacebook className="icon" />
            <RiInstagramFill className="icon" />
            <AiFillTwitterCircle className="icon"  />
            <a href=""><AiFillLinkedin className="icon" /></a>
            
          </div>
        </div>
      </footer>
    </>
  );
};
