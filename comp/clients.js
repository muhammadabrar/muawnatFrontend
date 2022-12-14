import Image from 'next/image';
import React from 'react';
import css from "../styles/client.module.css";
import c1 from '../public/c1.jpg';
import c2 from '../public/c2.jpg';
import c3 from '../public/c3.jpg';
// import c4 from '../public/client-4.png';
// import c5 from '../public/client-5.png';
// import c6 from '../public/client-6.png';
import { Container } from '@mui/material';


const Clients = () => {
      return (
            <section id="clients" className={css.clients}>
      <Container>

        <div className={css.clientsLogo} data-aos="zoom-in">

          <div class={css.clientLogo}>
            <Image src={c1} class={css.img} layout='responsive'/>
          </div>

          <div class={css.clientLogo}>
            <Image src={c2} class={css.img} layout='responsive' />
          </div>

          <div class={css.clientLogo}>
            <Image src={c3} class={css.img}  layout='responsive' />
          </div>
{/* 
          <div class={css.clientLogo}>
            <Image src={c3} class={css.img}  layout='responsive' />
          </div>

          <div class={css.clientLogo}>
            <Image src={c5} class={css.img}  layout='responsive' />
          </div>

          <div class={css.clientLogo}>
            <Image src={c6} class={css.img}  layout='responsive' />
          </div> */}

        </div>

      </Container>
    </section>
      );
}

export default Clients;
