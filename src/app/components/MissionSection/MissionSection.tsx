import React from 'react'
import style from './MissionSection.module.css'
import Image from "next/image";
import img from "../../../../imagens/homeMobile.png";
import { Parallax } from "react-scroll-parallax";
import googlePlay from "../../../../imagens/googlePlay.png";
import appleStore from "../../../../imagens/appleStore.png";

function MissionSection() {
  return (
    <div className={style.container}>
      <div className={[style.textInfoContainer, style.slideInLeft].join(" ")}>
        <h1 className={style.textInfo}>
        Pronto para começar a explorar o<span className={style.destaque}> Tá Chegando</span>?
        </h1>

        <p className={style.paragrafoInfo}>
        Baixe agora mesmo e simplifique sua jornada pela cidade de São Paulo. <b>
        Experimente a mobilidade urbana reinventada!
          </b>
        </p>

        <div className={style.lojasApp}>
          <div className="cursor-pointer">
            <Image
              src={googlePlay}
              width="230"
              height="85"
              alt="Picture of the author"
            />
          </div>

          <div className="cursor-pointer">
            <Image
              src={appleStore}
              width="230"
              height="85"
              alt="Picture of the author"
            />
          </div>
        </div>
      </div>

      <div className={style.rollInBlurredLeftt}>
        <Image
          src={img}
          width="0"
          height="0"
          sizes="80vw"
          className="w-full h-auto"
          alt="Picture of the author"
        />
      </div>
    </div>
  )
}

export default MissionSection