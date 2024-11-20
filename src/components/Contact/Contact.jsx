import React from "react";
import { FaLinkedin, FaYoutube, FaFacebookF, FaTwitter } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="my-6">
      <p className="text-lg text-rose-800 font-bold mb-3">My Contact</p>
      <div className="border-b-4 border-rose-800 w-28 mb-3"></div>

      <ul>
        <li className="flex items-center mb-2">
          <FaLinkedin className="mr-2" aria-label="LinkedIn"/>
          <a href="" target="_blank" rel="noopener noreferrer">Elisa Rose@gmail.com</a>
        </li>

        <li className="flex items-center mb-2">
          <FaYoutube className="mr-2" aria-label="YouTube"/>
          <a href="" target="_blank" rel="noopener noreferrer">4574358775</a>
        </li>

        <li className="flex items-center mb-2">
          <FaFacebookF className="mr-2" aria-label="Facebook"/>
          <a href="" target="_blank" rel="noopener noreferrer">Sale Galli, Latur</a>
        </li>

        <li className="flex items-center mb-2">
          <FaTwitter className="mr-2" aria-label="Twitter"/>
          <a href="" target="_blank" rel="noopener noreferrer">@elisarose21</a>
        </li>
      </ul>

    </div>
  );
};

export default Contact;