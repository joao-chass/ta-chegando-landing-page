"use client";
import React from "react";
import Image from "next/image";
import img from "../../../../imagens/homeMobile.png";
import style from "./HomeSection.module.css";
import { Parallax } from "react-scroll-parallax";
import googlePlay from "../../../../imagens/googlePlay.png";
import appleStore from "../../../../imagens/appleStore.png";


function HomeSection() {
  return (
    <div className={style.container}>
      <div className={[style.textInfoContainer, style.slideInLeft].join(" ")}>
        <Parallax speed={-15}>
          <h1 className={style.textInfo}>
            Viva a nova era da{" "}
            <span className={style.destaque}>mobilidade </span> em{" "}
            <span className={style.destaque}>São Paulo</span>!
          </h1>

          <p className={style.paragrafoInfo}>
            Navegue pela cidade com estilo e praticidade. Nosso app vai mudar
            sua forma de se mover.
            <br />
            <b>Junte-se à revolução agora!</b>
          </p>

          <div className={style.lojasApp}>
          <Image
            src={googlePlay}
            width="230"
            height="85"
            alt="Picture of the author"
          />

          <Image  
            src={appleStore}
            width="230"
            height="85"
    
        
            alt="Picture of the author"
          />
          </div>
        </Parallax>
      </div>

      <div className={style.rollInBlurredLeftt}>
        <Parallax speed={-10}>
          <Image
            src={img}
            width="0"
            height="0"
            sizes="80vw"
            className="w-full h-auto"
            alt="Picture of the author"
          />
        </Parallax>
      </div>
    </div>
  );
}

export default HomeSection;
