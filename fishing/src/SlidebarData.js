import React from "react";

import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";


export const SidebarData = [
  /*{
    title: "Login",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text"
  },*/
  {
    title: "Phishing Simulation",
    path: "/email-templates",
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: "nav-text"
  }/*,
  {
    title: "Phishing",
    path: "/fishing",
    icon: <FaIcons.FaCartPlus />,
    cName: "nav-text"
  }*/,
  {
    title: "Phishing Report",
    path: "/fishing-report",
    icon: <AiIcons.AiFillCodeSandboxCircle />,
    cName: "nav-text"
  },
  {
    title: "UserDetails",
    path: "/user-details",
    icon: < IoIcons.IoMdPeople/>,
    cName: "nav-text"
  },
  {
    title: "Logout",
    path: "/",
    icon: <AiIcons.AiOutlineLogout />,
    cName: "nav-text"
  }
];
