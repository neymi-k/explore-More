import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { SlSocialTwitter } from "react-icons/sl";
import { SlSocialLinkedin } from "react-icons/sl";

function Footer() {
  return (
    <footer className="bg-gray-500 text-white p-10 mt-20">
      <div className="container mx-auto">
        <div className="flex flex-col gap-4 text-center">
          <h2 className="text-3xl font-bold p-8">Contact us</h2>
          <div className="flex items-center justify-center gap-2">
            <FaMapMarkerAlt />
            <h3>
              <a
                href="https://maps.google.com/maps?q=28030+Fernando+Poo+878"
                className="hover:text-amber-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                28030 Fernando Poo, 25
              </a>
            </h3>
          </div>
          <a
            href="mailto:ExploreMore@company.com"
            className="hover:text-amber-500"
          >
            Explore_More@company.com
          </a>
        </div>

        <div className="flex justify-center gap-7 p-8 hover:text-white">
          <a
            href="https://es-es.facebook.com/"
            className="hover:text-orange-500 transform hover:scale-110 transition-transform duration-200"
          >
            <BsFacebook className="h-10 w-8 text-amber-500 hover:text-white" />
          </a>
          <a
            href="https://twitter.com/"
            className="hover:text-orange-500 transform hover:scale-110 transition-transform duration-200"
          >
            <SlSocialTwitter className="h-10 w-8 text-amber-500 hover:text-white" />
          </a>
          <a
            href="https://www.instagram.com/"
            className="hover:text-orange-500 transform hover:scale-110 transition-transform duration-200"
          >
            <BsInstagram className="h-10 w-8 text-amber-500 hover:text-white" />
          </a>
          <a
            href="https://es.linkedin.com/"
            className="hover:text-orange-500 transform hover:scale-110 transition-transform duration-200"
          >
            <SlSocialLinkedin className="h-10 w-8 text-amber-500 hover:text-white" />
          </a>
        </div>

        <div></div>
      </div>

      <div className="flex justify-center text-center gap-x-4 p-10">
        <p>Privacy & Cookies</p>
        <p>Terms & Conditions</p>
        <p>Accessibility</p>
      </div>
      <h4 className="flex justify-center p-5">
        Copyright ©2024 Company| All rights reserved
      </h4>
    </footer>
  );
}

export default Footer;
