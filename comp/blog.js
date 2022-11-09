import { Button, Container } from "@mui/material";
import Image from "next/image";
import React from "react";
import css from "../styles/blog.module.css";
import b1 from "../public/b2.jpg";
import b3 from "../public/b3.jpg";
import b4 from "../public/b4.jpg";

import Link from "next/link";
const Blog = () => {
  return (
    <section className={css.Blog}>
      <h1>Our Blogs</h1>
      <Container>
        <div className={css.Blogs}>
          <div className={css.BlogCard} data-aos="fade-up" data-aos-delay="150">
            <div className={css.cardheader}>
              <Image src={b1} className={css.img} layout="responsive" />
            </div>
            <div className={css.cardBody}>
              <p className={css.badge}>About</p>
              <Link href='#' ><h1 className={css.Title}>Are you a Pakistani looking for a job in a foreign country? 
</h1></Link>
              <p className="text-muted">
              It can be difficult to find work abroad, but there are some things you can do to improve your chances...
              </p>
            </div>
          </div>

          <div className={css.BlogCard} data-aos="fade-up" data-aos-delay="300">
            <div className={css.cardheader}>
              <Image src={b3} className={css.img} layout="responsive" />
            </div>
            <div className={css.cardBody}>
              <p className={css.badge}>About</p>
              <Link href='#' ><h1 className={css.Title}>The most common way is to find a job through an international recruitment agency like muawant</h1></Link>
              <p className="text-muted">
              There are a few ways to get an engineering job in a foreign country from Pakistan. The most common way is to find a job through an international recruitment agency like muawant...

              </p>
            </div>
          </div>

          <div className={css.BlogCard} data-aos="fade-up" data-aos-delay="450">
            <div className={css.cardheader}>
              <Image src={b4} className={css.img} layout="responsive" />
            </div>
            <div className={css.cardBody}>
              <p className={css.badge}>About</p>
              <Link href='#' ><h1 className={css.Title}>There are several ways to get foreign jobs without qualifications from Pakistan.</h1></Link>
              <p className="text-muted">
              One way is to look for online job postings that do not require qualifications...
              </p>
            </div>
          </div>
        </div>

        
      </Container>
    </section>
  );
};

export default Blog;
