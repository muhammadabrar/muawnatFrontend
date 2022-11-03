import { Container, Button } from "@mui/material";
import Image from "next/image";
import React from "react";
import css from "../styles/about.module.css";
import about from "../public/l3.jpg";
const About = () => {
  return (
    <Container>
      <div className={css.section}>
        <div className={css.aboutimg} data-aos="fade-up">
          <Image src={about} className={css.img} layout="responsive" />
        </div>
        <div>
          <div className={css.aboutTile}>
            <h2>Welcome to Muawnat</h2>

            <h1>Build Your Career With Muawnat</h1>
          </div>
          <div className={css.aboutText}>
            <p className="text-muted">
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document or
              a typeface without relying on meaningful content. Lorem ipsum may
              be used as a placeholder before final copy is available.
            </p>
            <p className="text-muted">
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document or
              a typeface without relying on meaningful content. Lorem ipsum may
              be used as a placeholder before final copy is available.
            </p>
            <Button variant="contained" className={`${css.HeroBtn} btnG btnR`}>
              Apply For job
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default About;
