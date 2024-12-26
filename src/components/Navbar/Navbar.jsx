import React, { useState } from "react";
import "./Navbar.css";
import Label from "../Company-label/Label";
import { HiOutlineHome } from "react-icons/hi";
import { FaCode } from "react-icons/fa6";
import { LuBookText } from "react-icons/lu";
import { IoSettingsOutline, IoCallOutline } from "react-icons/io5";
import { IoMdClose, IoMdCloudOutline } from "react-icons/io";
import { FiLogOut } from "react-icons/fi";
import { dropDownValues } from "../../data/Data";
import { RxHamburgerMenu } from "react-icons/rx";
import { motion } from "motion/react";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="navbar">
      <div className="navBar__active_for_mobile">
        <Label />

        <button
          className="hamburger-menu"
          onClick={() => setShowMenu(!showMenu)}
        >
          <RxHamburgerMenu className="hamburger-icon" />
        </button>
      </div>

      <div className="navMenu_For_Desktop">
        <div className="mobileNav__menu-header">
          <Label />
        </div>

        <select className="dropDown" defaultValue={"UtkarshDhairyaPanwar"}>
          {dropDownValues.map((value, index) => {
            return (
              <option key={index} value={value}>
                {value.length > 15 ? value.slice(0, 15) + "..." : value}
              </option>
            );
          })}
        </select>

        <div className="navMenus">
          <ul className="navList-top">
            <li className="navItem">
              <HiOutlineHome className="home-icon navIcons" />
              <p className="menu-texts">Repositories</p>
            </li>
            <li className="navItem">
              <FaCode className="code-icon navIcons" />
              <p className="menu-texts">AI Code Review</p>
            </li>
            <li className="navItem">
              <IoMdCloudOutline className="cloud-icon navIcons" />
              <p className="menu-texts">Cloud Security</p>
            </li>
            <li className="navItem">
              <LuBookText className="book-icon navIcons" />
              <p className="menu-texts">How to Use</p>
            </li>
            <li className="navItem">
              <IoSettingsOutline className="settings-icon navIcons" />
              <p className="menu-texts">Settings</p>
            </li>
          </ul>

          <ul className="navList-bottom">
            <li className="navItem">
              <IoCallOutline className="call-icon navIcons" />
              <p className="menu-texts">Support</p>
            </li>

            <li className="navItem">
              <FiLogOut className="logout-icon navIcons" />
              <p className="menu-texts">Logout</p>
            </li>
          </ul>
        </div>
      </div>

      <motion.div
        initial={{ y: "-100%" }}
        animate={{ y: showMenu ? "0%" : "-100%" }}
        transition={{ ease: "easeInOut", duration: 0.8 }}
        className={`navMenu ${showMenu ? "showMenu" : "hideMenu"}`}
      >
        <div className="mobileNav__menu-header">
          <Label />

          <button className="close-menu" onClick={() => setShowMenu(!showMenu)}>
            <IoMdClose className="close-icon" />
          </button>
        </div>

        <select className="dropDown" defaultValue={"UtkarshDhairyaPanwar"}>
          {dropDownValues.map((value, index) => {
            return (
              <option key={index} value={value}>
                {value.length > 15 ? value.slice(0, 15) + "..." : value}
              </option>
            );
          })}
        </select>

        <div className="navMenus">
          <ul className="navList-top">
            <li className="navItem">
              <HiOutlineHome className="home-icon navIcons" />
              <p className="menu-texts">Repositories</p>
            </li>
            <li className="navItem">
              <FaCode className="code-icon navIcons" />
              <p className="menu-texts">AI Code Review</p>
            </li>
            <li className="navItem">
              <IoMdCloudOutline className="cloud-icon navIcons" />
              <p className="menu-texts">Cloud Security</p>
            </li>
            <li className="navItem">
              <LuBookText className="book-icon navIcons" />
              <p className="menu-texts">How to Use</p>
            </li>
            <li className="navItem">
              <IoSettingsOutline className="settings-icon navIcons" />
              <p className="menu-texts">Settings</p>
            </li>
          </ul>

          <ul className="navList-bottom">
            <li className="navItem">
              <IoCallOutline className="call-icon navIcons" />
              <p className="menu-texts">Support</p>
            </li>

            <li className="navItem">
              <FiLogOut className="logout-icon navIcons" />
              <p className="menu-texts">Logout</p>
            </li>
          </ul>
        </div>
      </motion.div>
    </div>
  );
};

export default Navbar;
