import React from "react";
import { default as DesktopNav } from "./Nav.desktop";
import { default as MobileNav } from "./Nav.mobile";

export default function () {
  return (
    <>
      <DesktopNav />
      <MobileNav />
    </>
  );
}
