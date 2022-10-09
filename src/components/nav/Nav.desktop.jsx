import React from "react";
import { NavLinks, NavLogo, NavProfile, NavWrapper } from "./Nav.styles";
import {
  BsHeart,
  BsHouse,
  BsImage,
  BsSearch,
  BsSquare,
  BsPersonCircle,
} from "react-icons/bs";

export default function DesktopNav() {
  return (
    <NavWrapper>
      <NavLogo>
        <BsSquare size={18} />
        <p>Pixels</p>
      </NavLogo>
      <NavLinks>
        <BsHouse size={18} />
        <BsSearch size={18} />
        <BsImage size={18} />
        <BsHeart size={18} />
      </NavLinks>
      <BsPersonCircle size={24} />
    </NavWrapper>
  );
}
