import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#00615b] text-white py-10 px-4">
      <div className="max-w-[1175px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Logo + Tagline */}
        <aside>
          <img
            src="/aus-logo.png"
            alt="AMRIT 2025 Logo"
            height={100}
            width={100}
            className="mb-2"
          />
          <p className="text-sm">
            <strong>CCESMHL 2025</strong>
            <br />
            Assam University, Silchar & Diphu
          </p>
        </aside>

        {/* Column 1: University Links */}
        <nav>
          <h6 className="font-bold mb-2">
            Assam University,
            <br />
            Silchar
          </h6>
          <ul className="space-y-1 text-sm">
            <li>
              <a
                className="link link-hover"
                href="https://aus.ac.in"
                target="_blank"
              >
                Main Site
              </a>
            </li>
            <li>
              <a
                className="link link-hover"
                href="https://ausexamination.ac.in"
                target="_blank"
              >
                Results & Notice
              </a>
            </li>
            <li>
              <a
                className="link link-hover"
                href="http://www.aus.ac.in/notices/"
                target="_blank"
              >
                Notices
              </a>
            </li>
            <li>
              <a
                className="link link-hover"
                href="http://www.aus.ac.in/contactus/"
                target="_blank"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>

        {/* Column 2: Department Links */}
        <nav>
          <h6 className="font-bold mb-2">
            Quick Links
            <br />
            <br />
          </h6>
          <ul className="space-y-1 text-sm">
            <li>
              <a
                className="link link-hover"
                href="http://www.aus.ac.in/students-welfare/"
                target="_blank"
              >
                DSW
              </a>
            </li>
            <li>
              <a
                className="link link-hover"
                href="https://ausexamination.ac.in/"
                target="_blank"
              >
                Examination
              </a>
            </li>
            <li>
              <a
                className="link link-hover"
                href="http://www.aus.ac.in/diphucampus/"
                target="_blank"
              >
                Diphu Campus
              </a>
            </li>
            <li>
              <Link to="/call-for-paper">
                <a className="link link-hover" href="#">
                  Call For Paper
                </a>
              </Link>
            </li>
          </ul>
        </nav>

        {/* Column 3: Address */}
        <div className="text-sm">
          <h6 className="font-bold mb-2">Address</h6>
          <br />
          <p>
            Assam University,
            Silchar, <br />
            Dorgakona, Cachar, Assam, India <br />
            PIN – 788011
          </p>
        </div>
      </div>
      
      {/* <div className="flex flex-col items-center mt-8">
        <h3 className="text-lg font-semibold mb-2">Our Visitor</h3>
        <a
          href="https://www.freecounterstat.com"
          title="visitor counter"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://counter1.optistats.ovh/private/freecounterstat.php?c=zqxc1r5zpc4f36x6ymee8jawj6h3kh2m"
            alt="visitor counter"
            className="border-2 border-lime-200 shadow-[0_0_10px_#ffff00] rounded"
          />
        </a>
      </div> */}

      <div className="text-center mt-8 text-sm">
        <p>
          Copyright © {new Date().getFullYear()} - Designed and Developed by
          Saurav Paul, Research Scholar, AUS, CS{" "}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
