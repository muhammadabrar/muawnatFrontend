import { Button, Container } from "@mui/material";
import Image from "next/image";
import React from "react";
import css from "../styles/blog.module.css";
import b1 from "../public/l3.jpg";
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
              <Link href='#' ><h1 className={css.Title}>Title</h1></Link>
              <p className="text-muted">
                In publishing and graphic design, Lorem ipsum is a placeholder
                text commonly
              </p>
            </div>
          </div>

          <div className={css.BlogCard} data-aos="fade-up" data-aos-delay="300">
            <div className={css.cardheader}>
              <Image src={b1} className={css.img} layout="responsive" />
            </div>
            <div className={css.cardBody}>
              <p className={css.badge}>About</p>
              <Link href='#' ><h1 className={css.Title}>Title</h1></Link>
              <p className="text-muted">
                In publishing and graphic design, Lorem ipsum is a placeholder
                text commonly
              </p>
            </div>
          </div>

          <div className={css.BlogCard} data-aos="fade-up" data-aos-delay="450">
            <div className={css.cardheader}>
              <Image src={b1} className={css.img} layout="responsive" />
            </div>
            <div className={css.cardBody}>
              <p className={css.badge}>About</p>
              <Link href='#' ><h1 className={css.Title}>Title</h1></Link>
              <p className="text-muted">
                In publishing and graphic design, Lorem ipsum is a placeholder
                text commonly
              </p>
            </div>
          </div>
        </div>

        
      </Container>
    </section>
  );
};

export default Blog;
