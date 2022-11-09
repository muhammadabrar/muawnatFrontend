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
                  <h4>Click On  Apply Button</h4>
                </>
              </Link>
              <p>The world of work is changing fast. Don't get left behind.
</p><br/>
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
              <h4>Fill Out The Form</h4>
              <p>Shortlist roles, manage your applications and apply within seconds.</p>
            </div>
          </div>

          <div data-aos="fade-up" data-aos-delay="300">
            <div className={css.box}>
              <span>03</span>
              <h4> Upload Your Documents</h4>
              <p>
              Upload  all important documents including  resume, Experience letters, Passport and CNIC Let employers match you to their jobs as soon as they become available.
              </p>
            </div>
          </div>
          <div data-aos="fade-up" data-aos-delay="450">
            <div className={css.box}>
              <span>04</span>
              <h4>You Are Done</h4>
              <p>
              Good! Please sit back and rest, and it's our turn to respond to you

              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HTA;
