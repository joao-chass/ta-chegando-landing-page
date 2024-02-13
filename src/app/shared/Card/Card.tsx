"use client";

import React, { Component } from 'react'
import style from './Card.module.css'

export default class Card extends Component{
    render () {
        return (
            <div className={style.cardBody}>
                <div className={style.titulo}>
                        {this.props.titulo}
                </div>

                <div className={style.subTitulo}>
                {this.props.subTitulo}
                </div>
            </div>
        )
    }

}

