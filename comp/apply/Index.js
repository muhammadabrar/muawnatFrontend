import React from 'react';
import css from '../../styles/apply.module.css';
import img from '../../public/pic (3).jpg';
import Image from 'next/image';
const ApplyComp = () => {
      return (
            <section className={css.apply}>
                  <div>
                        <Image src={img} />
                  </div>
            </section>
      );
}

export default ApplyComp;
