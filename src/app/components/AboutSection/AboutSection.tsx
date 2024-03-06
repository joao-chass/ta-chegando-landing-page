import React from "react";
import style from "./AboutSection.module.css";
import Card from "@/app/shared/Card/Card";
import {NewspaperIcon, MapPinIcon, StarIcon,  BellAlertIcon  } from '@heroicons/react/24/outline'

import img from "../../../../imagens/homeMobile.png";
import Image from "next/image";

function AboutSection() {
  return (
    <>
      <div className={style.container}>
        <div className={style.fontInfo}>
          Explore os Recursos do{" "}
          <span className={style.destaque}>Tá Chegando</span>!
        </div>

        <div className={style.containerCards}>
          <div className={style.exploreInfo}>
            <div className={style.card}>
            <NewspaperIcon/>
            </div>
            <b className={style.exploreTitulo}>Informativos</b>
            <h1 className={style.exploreSubtitulo}>
            Mantenha-se atualizado com informações em tempo real, facilitando sua jornada na cidade
            </h1>

            <br />
            <br />

            <div className={style.card}>
              <MapPinIcon />
            </div>
            <b className={style.exploreTitulo}>Localizaçao de onibus</b>
            <h1 className={style.exploreSubtitulo}>
            Obtenha informações em tempo real sobre o seu ônibus através do mapa. Tenha acesso instantâneo a atualizações precisas que o manterão informado sobre a localização e status do seu transporte, proporcionando uma experiência mais conveniente e eficiente
            </h1>
          </div>

          <Image
            src={img}
            width="306"
            height="560"
            alt="Picture of the author"
          />

         
          <div className={style.exploreInfoEnd}>

          <div className={style.card}>
          <StarIcon />
          </div>
            <b className={style.exploreTitulo}>Favoritos</b>
            <h1 className={style.exploreSubtitulo}>
            Salve os ônibus que você utiliza com frequência para facilitar suas pesquisas sempre que precisar.
            </h1>


            <br />
            <br />

            <div className={style.card}>
             <BellAlertIcon />
            </div>
            <b className={style.exploreTitulo}>Criação de alertas</b>
            <h1 className={style.exploreSubtitulo}>
            Desfrute da conveniência de saber o horário certo para sair de casa. Com a criação de alertas, você ficará informado sobre o momento exato da chegada do seu ônibus no ponto de embarque, proporcionando uma experiência de viagem mais organizada e eficaz.
            </h1>


           
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutSection;
