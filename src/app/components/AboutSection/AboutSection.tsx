import React from 'react'
import style from './AboutSection.module.css'
import Card from '@/app/shared/Card/Card'

function AboutSection() {
  return (
    <>
    <div className={style.container}>
      
            <div className={style.fontInfo }>Ajudamos pessoas na sua mobilidade pela cidade de maneira eficiente e econômica.</div>
       
            <div className={style.containerCards}>
                <Card titulo={'Informativos sobre o transporte publico'} subTitulo={'Mantenha-se atualizado com informações em tempo real, facilitando sua jornada na cidade'}/>
                <Card titulo={'Localizaçao em tempo real'} subTitulo={'Obtenha informações em tempo real sobre o seu ônibus através do mapa. Tenha acesso instantâneo a atualizações precisas que o manterão informado sobre a localização e status do seu transporte, proporcionando uma experiência mais conveniente e eficiente'}/>
                <Card titulo={'Criação de alertas'} subTitulo={'Desfrute da conveniência de saber o horário certo para sair de casa. Com a criação de alertas, você ficará informado sobre o momento exato da chegada do seu ônibus no ponto de embarque, proporcionando uma experiência de viagem mais organizada e eficaz.'}/>
            </div>

       
    </div>

    
      </>
  )
}

export default AboutSection