import React from "react";
import style from './Cards.module.css'

export default function Card({name, description, image_url, price, brand}) {
    return (
        <div className={style.card}>
            <div className={style.image}>
            <img src={image_url} className={style.image_url} alt="img not found"   />
            </div>
            <div className={style.info}>
            <h3 className={style.name}>{name}</h3>
            <h3 className={style.price}>U$D {price} </h3>
            <h4 className={style.brand}> {brand}</h4>
            </div>
           
        </div>
    )
}