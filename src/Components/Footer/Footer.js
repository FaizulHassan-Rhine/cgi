import React from "react";
import logo from "./images/logo2.png";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-shade-color">
      <footer className=" footer p-10 grid lg:grid-cols-5 lg:justify-items-center ">
        <div className="-mb-6">
          <a href="">
            <img className="h-10 w-20" src={logo} alt="" />
          </a>
          <p className="w-60">
            The KOW Company is one of the leading CGI company for businesses all
            over the world.
          </p>
          <hr className=" mt-7 w-20  " />
          <p className="flex ">
            <FaFacebook className="h-6 w-6 mr-2 text-white"></FaFacebook>
            <FaYoutube className="h-6 w-6 mr-2 text-white"></FaYoutube>
            <FaLinkedinIn className="h-6 w-6 mr-2 text-white"></FaLinkedinIn>
            <FaTwitter className="h-6 w-6 mr-2 text-white"></FaTwitter>
            <FaInstagram className="h-6 w-6 mr-2 text-white"></FaInstagram>
          </p>
        </div>
        <div>
          <span className="font-bold text-white text-lg">Menu</span>
          <a className="link link-hover">Home</a>
          <a className="link link-hover">Features</a>
          <a className="link link-hover">Services</a>
          <a className="link link-hover">Pricing</a>
          <a className="link link-hover">Blogs</a>
        </div>
        <div>
          <span className="font-bold text-white text-lg">Features</span>
          <a className="link link-hover">Shopify App</a>
          <a className="link link-hover">AmazonSpn</a>
          <a className="link link-hover">Cutoutwiz</a>
          <a className="link link-hover">BigCommerce App</a>
          <a className="link link-hover">Shotflow</a>
        </div>
        <div>
          <span className="font-bold text-white text-lg">Useful Links</span>
          <a className="link link-hover">Privacy Policy</a>
          <a className="link link-hover">Terms & Conditions</a>
          <a className="link link-hover">Contact Us</a>
          <a className="link link-hover">Sign Up</a>
        </div>
        <div>
          <span className="font-bold text-white text-lg">Our Address</span>
        </div>
      </footer>
      <footer className=" px-10 py-4 border-t bg-shade-color text-center text-white font-semibold border-black">
        <p>Designed And Developed By CutOutWiz</p>
      </footer>
    </div>
  );
};

export default Footer;