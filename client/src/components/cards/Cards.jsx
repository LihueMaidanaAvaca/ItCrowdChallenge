import React from "react";
import style from './Cards.module.css'

export default function Card({name, image_url, price, logo_url}) {
    return (
        <div className={style.card}>
            <div className={style.image}>
            <img src={image_url} className={style.image_url} alt="img not found"   />
            </div>
            <div className={style.info}>
                <img src={logo_url} className={style.logo_url} alt="" />
            <h3 className={style.price}>U$D {price} </h3>
            <h3 className={style.name}>{name}</h3>
            </div>
           
        </div>
    )
}