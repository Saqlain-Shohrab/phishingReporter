import React from "react";

import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";


export const SidebarData = [
  {
    title: "Login",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text"
  },
  {
    title: "EmailTemplate",
    path: "/email-templates",
    icon: <IoIcons.IoIosPaper />,
    cName: "nav-text"
  },
  {
    title: "Fishing",
    path: "/fishing",
    icon: <FaIcons.FaCartPlus />,
    cName: "nav-text"
  },
  {
    title: "Fishing Report",
    path: "/fishing-report",
    icon: <IoIcons.IoMdPeople />,
    cName: "nav-text"
  },
  {
    title: "UserDetails",
    path: "/user-details",
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: "nav-text"
  }
];
