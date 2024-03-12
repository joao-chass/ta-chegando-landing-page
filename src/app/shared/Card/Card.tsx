"use client";

import React, { Component } from 'react'
import style from './Card.module.css'
import { NewspaperIcon, Bars2Icon, XMarkIcon } from '@heroicons/react/24/outline'

export default class Card extends Component{
    render () {
        return (
            <div className={style.cardBody}>

              
                 <NewspaperIcon color='pink' width={80} />

               
            </div>
        )
    }

}

