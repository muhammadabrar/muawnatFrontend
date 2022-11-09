import { Container, IconButton, Paper, TextField } from "@mui/material";
import Image from "next/image";
import React from "react";
import css from "../styles/footer.module.css";
import logo from "../public/Logo.png";
import InputBase from "@mui/material/InputBase";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
const Footer = () => {
  return (
    <section className={css.Footer}>
      <Container>
        <div className={css.FooterWrap}>
          <div className={css.about}>
            <div className={css.Logo}>
              <Image src={logo} layout="responsive" />
            </div>
            <p className="text-muted">
            Muawnat is a platform to find Full-time work opportunities with thousands of employers worldwide.
            </p>
          </div>
          <div className={css.Newsletter}>
            <h1>Newsletter</h1>
            <p className="text-muted">
              Stay updated with our latest trends Seed heaven so said place
              winged over given forth fruit.
            </p>
            <dev className={css.Input}>
              <InputBase className={css.InputF} fullWidth placeholder="Enter email address" type={"email"} />
              <IconButton className="btnG">
                <ArrowForwardIosIcon />
              </IconButton>
            </dev>
          </div>
          <div className={css.contact}>
            <h1>Contact us</h1>

            <p className="text-muted">
              <span>Address: </span> B-10 Link Rd, B-Block Block B Satellite Town, Rawalpindi, Punjab
            </p>
            <p>
            <a href="tel: +92 334 8516151" className="text-muted">
              <span>Phone: </span>
              +92 334 8516151
            </a>
            </p>
            <p>
            <a href="mailto:info@muawant.com" className="text-muted">
              <span>Email: </span> info@muawant.com
            </a>
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Footer;
