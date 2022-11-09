import React from "react";
import css from "../../styles/apply.module.css";
import img from "../../public/A1.jpg";
import bg1 from "../../public/4300578.png";

import Image from "next/image";
import Steps from "./steps";
const ApplyComp = () => {
  return (
    <section className={css.apply}>
      <div className={css.bgImg}>
        <Image src={img} className={css.img} />
      </div>
      <div className={css.wrapApply}>
        <div className={css.bg1}>
          <Image src={bg1} className={css.bg1Img} layout="responsive" />
        </div>
        <Steps />
      </div>
    </section>
  );
};

export default ApplyComp;
