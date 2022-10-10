import { BsList, BsSquare } from "react-icons/bs";
import React, { useState } from "react";
import {
  NavLink,
  NavLinks,
  NavLogo,
  NavProfile,
  MobileWrapper,
} from "./Nav.styles";
import { NavMenu } from "./Nav.menu";

export default function MobileNav() {
  const [show, setShow] = useState(false);

  return (
    <>
      <MobileWrapper>
        <NavLogo>
          <BsSquare size={18} />
          <p>Pixels</p>
        </NavLogo>
        <BsList
          size={24}
          onClick={() => setShow(!show)}
          style={{ cursor: "pointer" }}
        />
      </MobileWrapper>
      <NavMenu show={show}>
        <NavLinks>
          <p>Home</p>
        </NavLinks>
      </NavMenu>
    </>
  );
}
