import React from "react";
import { NavLinks, NavLogo, NavLink, DesktopWrapper } from "./Nav.styles";
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
    <DesktopWrapper>
      <NavLogo>
        <BsSquare size={18} />
        <p>Pixels</p>
      </NavLogo>
      <NavLinks>
        <NavLink>
          <BsHouse size={18} />
        </NavLink>
        <NavLink>
          <BsSearch size={18} />
        </NavLink>
        <NavLink>
          <BsImage size={18} />
        </NavLink>
        <NavLink>
          <BsHeart size={18} />
        </NavLink>
      </NavLinks>
      <BsPersonCircle size={24} />
    </DesktopWrapper>
  );
}
