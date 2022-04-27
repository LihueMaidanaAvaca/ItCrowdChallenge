import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDetail } from "../../actions";


export default function EditProduct(props){
    const dispatch = useDispatch()
    const [stats, setStats] = useState([]);

    const myProduct = useSelector ((state)=> state.detail)


    useEffect(()=> {
        dispatch(getDetail(props.match.params.id));
    },[dispatch])

    useEffect(() => {
        setStats(myProduct);
    }, [myProduct])

    return(
        <section>
            <h1>Edit Product</h1>
        </section>
    )
}