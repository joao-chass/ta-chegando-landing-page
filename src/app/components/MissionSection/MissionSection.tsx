import React from 'react'
import style from './MissionSection.module.css'

function MissionSection() {
  return (
    <div className={style.container}>
    
    <h1 className={style.titulo}>
        Missão
    </h1>

    <h2 className={style.subTitulo}>A missão do Tá Chegando é destacar que o uso do transporte público em São Paulo pode ser não apenas eficiente e confortável, mas também incrivelmente acessível. Queremos demonstrar que a escolha pelo transporte coletivo pode proporcionar uma experiência de qualidade,conforto e economia para os usuários na cidade.</h2>
    
    </div>
  )
}

export default MissionSection