import { React, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../public/Logo.png";
import css from "../styles/navbar.module.css";
import { Button, Container } from "@mui/material";
function Navbar(props) {
  const [y, setY] = useState(0);
  const handleNavigation = (e) => {
    const window = e.currentTarget;
    if (y > window.scrollY) {
      console.log("scrolling up");
    } else if (y < window.scrollY) {
      console.log("scrolling down");
    }
    setY(window.scrollY);
  };
  const controlNav = () => {
    if (window.scroll > 100) {
    }
  };

  // useEffect(() => {
  //     setY(window.scrollY);
  //   }, []);

  useEffect(() => {
    window.addEventListener("scroll", (e) => handleNavigation(e));

    return () => {
      // return a cleanup function to unregister our function since its gonna run multiple times
      window.removeEventListener("scroll", (e) => handleNavigation(e));
    };
  }, []);
  return (
    <div className={`${css.nav} ${(y > 200) | props?.fill && css.fill}`}>
      <Container>
        <div
          className={`${css.navWrap} ${
            (y > 200) | props?.fill && css.borderLess
          } `}
        >
          <Link href="/">
            {" "}
            <div className={css.logo}>
              <Image src={Logo} layout="responsive" />
            </div>
          </Link>
          <div>
            <Link href={"/apply"} className={css.Navlink}>
              Apply{" "}
            </Link>
            <Link href={'/create_cv'}>
              <Button variant="contained" className="btnG btnR">
                Create CV
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Navbar;
