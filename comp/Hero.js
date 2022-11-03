import Image from "next/image";
import React from "react";
import css from "../styles/Hero.module.css";
import map from "../public/map.png";
import { Container, Button } from "@mui/material";
import Link from "next/link";
const Hero = () => {
  return (
    <div className={css.hero}>
      <div className={css.mapImage}>
        <Image src={map} layout="responsive" />
      </div>
      <div className={css.HeroContent}>
        <Container>
          <>
            <h3 className={css.cominSoon}>Coming Soon!</h3>
            <h1 className={css.Herotext}>
              {" "}
              Get early access to <br />
              your favorite overseas jobs!
            </h1>
            <h1 className={css.UrduHerotext}>
            اپنی پسندیدہ بیرون ملک ملازمتوں تک<br /> 
             !     جلد رسائی حاصل کریں  
            </h1>
            <Link href={'/apply'}><Button variant="contained" className={`${css.HeroBtn} btnG btnR`}>
              Apply For job
            </Button>
            </Link>
          </>
        </Container>
      </div>
    </div>
  );
};

export default Hero;
