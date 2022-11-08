import Image from "next/image";
import React, { useEffect, useState } from "react";
import css from "../styles/Hero.module.css";
import map from "../public/l1.jpg";
import l2 from "../public/l2.jpg";
import l3 from "../public/pic (1).jpg";

import { Container, Button } from "@mui/material";
import Link from "next/link";
const Hero = () => {
  const [silde, setsilde] = useState(1);
  useEffect(() => {
    setTimeout(() => {
      setsilde(silde == 1 ? 2 : silde == 2 ? 3 : 1);
    }, 10000);
  }, [silde]);
  return (
    <div className={css.hero}>
      {silde == 1 ? (
        <div className={css.mapImage}>
          <Image src={l2} layout="responsive" data-aos={"fade-in"} />
        </div>
      ) : silde == 2 ? (
        <div className={css.mapImage}>
          <Image src={l3} layout="responsive" data-aos={"fade-in"} />
        </div>
      ) : (
        <div className={css.mapImage}>
          <Image src={map} layout="responsive" data-aos={"fade-in"} />
        </div>
      )}
      {/* <div className={css.mapImage} >
        <Image src={map} layout="responsive" data-aos={"fade-in"}/>
      </div> */}
      <div className={css.overlay}></div>
      <div className={css.HeroContent}>
        <Container>
          <>
            <h3 className={css.cominSoon}>Coming Soon! </h3>
            <h1 className={css.Herotext}>
              {" "}
              Get early access to <br />
              your favorite overseas jobs!
            </h1>
            <h1 className={`${css.UrduHerotext} urdu`}>
              اپنی پسندیدہ بیرون ملک ملازمتوں تک
              <br />! جلد رسائی حاصل کریں
            </h1>
            <Link href={"/apply"}>
              <Button
                variant="contained"
                className={`${css.HeroBtn} btnG btnR`}
              >
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
