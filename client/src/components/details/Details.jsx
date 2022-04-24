import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDetail } from "../../actions";
import { useEffect, useState } from "react";
import style from "./Details.module.css"

export default function Detail(props){
    console.log(props)
    const dispatch = useDispatch()
    const [stats, setStats] = useState([]);

    const myProduct = useSelector ((state)=> state.detail)

    useEffect(()=> {
        dispatch(getDetail(props.match.params.id));
    },[dispatch])
    
    
    
    useEffect(() => {
        setStats(myProduct);
    }, [myProduct])
    
    return (
        <div className={style.back} >          
         <div>
            <Link to= '/home'>
                <button >Home</button>
            </Link>
            {
                myProduct.length>0?
                <div className={style.megacard}>
                    <h1 className={style.title}>{myProduct[0].name} </h1>
                    <img src={myProduct[0].image_url} className={style.image} width="400px" height="400px" />
                    
                    </div> :<p>Loading...</p>
            }
            </div>   
        </div>
    )
}