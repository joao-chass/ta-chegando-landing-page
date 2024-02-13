import React from 'react'
import Image from "next/image";
import img from '../../../../imagens/Sem-Título-8.png'
import style from './HomeSection.module.css'


function HomeSection() {
  return (
    <div className={style.container}>
   
      <div className={style.textInfoContainer}>

    <h1 className={style.textInfo}>Ta chegando, o aplicativo de transporte público exclusivo para a cidade de São Paulo!</h1>
    <h2 className={style.textInfoSub}>
    Em breve, você terá em suas mãos uma ferramenta inovadora para facilitar sua locomoção pela metrópole. 
    Fique atento e prepare-se para uma experiência única e eficiente em seus deslocamentos pela capital paulista.
    </h2>
      </div>

      <div>
    <Image
    src={img}
    width={500}
    height={500}
    alt="Picture of the author"
  />

      </div>
  

    </div>
  )
}

export default HomeSection