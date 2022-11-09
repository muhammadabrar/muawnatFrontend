import { Container, Button } from "@mui/material";
import Image from "next/image";
import React from "react";
import css from "../styles/about.module.css";
import about from "../public/about1.jpg";
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
            Muawnat is a platform to find Full-time work opportunities with thousands of employers worldwide. With Muawnat you can Recruit with Confidence and Hire instantly. We have completely reimagined the hiring/finding work process to bring it in line with current-day requirements of speed & transparency.

            </p>
            <p className="text-muted">
            The dynamics of the workplace have totally changed in the last decade and more so after the pandemic, global teams that are flexible and agile have become the norm. Most of the current job search/freelancing platforms were conceived a few decades ago when the situation was different. These are too cumbersome, slow, and inefficient to effectively meet current-day requirements not only of the employers/ hirers but also of those who wish to find work painlessly.
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
