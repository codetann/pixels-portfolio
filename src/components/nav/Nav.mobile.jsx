import { BsList, BsSquare } from "react-icons/bs";
import React from "react";
import {
  NavLink,
  NavLinks,
  NavLogo,
  NavProfile,
  MobileWrapper,
} from "./Nav.styles";

export default function MobileNav() {
  return (
    <MobileWrapper>
      <NavLogo>
        <BsSquare size={18} />
        <p>Pixels</p>
      </NavLogo>
      <BsList size={24} />
    </MobileWrapper>
  );
}
