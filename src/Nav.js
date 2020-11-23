import React from "react";
import "./Nav.css";

function Nav() {
  //   useEffect(() => {
  //     window.addEventListener("scroll", () => {
  //       if (window.scrollY > 100) {
  //         handleShow(true);
  //       } else handleShow(false);
  //     });
  //     return () => {
  //       window.removeEventListener("scroll");
  //     };
  //   }, []);

  return (
    <div className="nav">
      <img
        className="nav__logo"
        src="https://commons.wikimedia.org/wiki/File:Logonfx.png#/media/File:Logonfx.png"
        alt="Netflix Logo"
      />
    </div>
  );
}

export default Nav;
