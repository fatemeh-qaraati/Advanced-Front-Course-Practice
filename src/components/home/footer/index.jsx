import React from "react";
import { CONTACT_ROUTE, HOME_ROUTE } from "../../../constant/routes.js";

const Footer = () => {
  return (
    <footer
      style={{ "backgroundColor": "#213555" }}
      className="text-gray-200 py-8 m-0"
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h5 className="text-lg font-semibold text-white mb-4">About Us</h5>
            <p className="text-sm">
              Discover the best hotels and luxury accommodations with us. We
              ensure your comfort and satisfaction with our exceptional
              services.
            </p>
          </div>

          <div>
            <h5 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h5>
            <ul>
              <li>
                <a
                  href={HOME_ROUTE}
                  className="text-sm hover:text-blue-400 transition"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#toproom-section"
                  className="text-sm hover:text-blue-400 transition"
                >
                  Rooms
                </a>
              </li>
              <li>
                <a
                  href="#service-section"
                  className="text-sm hover:text-blue-400 transition"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href={CONTACT_ROUTE}
                  className="text-sm hover:text-blue-400 transition"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Contact Us
            </h3>
            <ul>
              <li>730 New York Avenue, Troy, TX</li>
              <li>Email: Luxe.Haven@gmail.com</li>
              <li>Phone: +011 (129) 326-4920</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="hover:text-white transition"
                aria-label="Facebook"
              >
                <i className="fab fa-facebook fa-lg"></i>
              </a>
              <a
                href="#"
                className="hover:text-white transition"
                aria-label="Twitter"
              >
                <i className="fab fa-twitter fa-lg"></i>
              </a>
              <a
                href="#"
                className="hover:text-white transition"
                aria-label="Instagram"
              >
                <i className="fab fa-instagram fa-lg"></i>
              </a>
              <a
                href="#"
                className="hover:text-white transition"
                aria-label="LinkedIn"
              >
                <i className="fab fa-linkedin fa-lg"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-500 pt-4 text-center text-sm">
          © {new Date().getFullYear()} Luxe Haven. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;