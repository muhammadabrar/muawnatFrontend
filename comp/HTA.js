import { Container, Button } from "@mui/material";
import Link from "next/link";
import React from "react";
import css from "../styles/HTA.module.css";

const HTA = () => {
  return (
    <section className={css.HTA}>
      <h1>How To Apply</h1>
      <Container>
        <div className={css.wrap}>
          <div data-aos="fade-up">
            <div className={css.box}>
              <span>01</span>
              <Link href={"/apply"}>
                <>
                  <h4>Go To Apply Page</h4>
                </>
              </Link>
              <Link href={"/apply"}>
                <Button
                  variant="contained"
                  className={`${css.HeroBtn} btnG btnR`}
                >
                  Apply For job
                </Button>
              </Link>
            </div>
          </div>

          <div data-aos="fade-up" data-aos-delay="150">
            <div className={css.box}>
              <span>02</span>
              <h4>Fill The Form</h4>
              <p>Fill The Form One By One</p>
            </div>
          </div>

          <div data-aos="fade-up" data-aos-delay="300">
            <div className={css.box}>
              <span>03</span>
              <h4> Upload Your Documents</h4>
              <p>
                Upload your important documents cv, certification, Id card etc
              </p>
            </div>
          </div>
          <div data-aos="fade-up" data-aos-delay="450">
            <div className={css.box}>
              <span>04</span>
              <h4>You Are Done</h4>
              <p>
                Wait for our response. <br /> We will contact you as soon as
                possible
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HTA;
