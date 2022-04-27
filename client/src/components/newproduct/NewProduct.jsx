import React, {useState, useEffect} from "react";
import {Link, useHistory} from 'react-router-dom';
import {postNewProduct, getBrands} from '../../actions';
import { useDispatch } from "react-redux";
import styles from "./NewProduct.module.css"


// function validate(input){
//     let errors={};
//     if(!input.name ){errors.name = 'Name is require'}
//     if(!input.description){errors.description = 'Write 20 to 100 characters'}
//     if(!input.steps){errors.steps = 'Write 20 to 100 characters'}
//     if(!input.image_url ){errors.image = 'Use an url'}
//     if(!input.brand ){errors.brand = 'Name is require'}
//     return errors;
// }

export default function NewProduct(){
    const dispatch = useDispatch()
    const history = useHistory()
    const [errors, setErrors] = useState({});

    const [input, setInput] = useState({
        name: "",
        description: "",
        image_url:"",
        price: 0,
        brand: "",
    })
    
    function handleChange(e){
        setInput({
            ...input,
            [e.target.name] : e.target.value
        })
        // setErrors(validate({
        //     ...input,
        //     [e.target.name] : e.target.value
        // }))
    }
    
    
    
    function handleSubmit(e){
        e.preventDefault();
        if(Object.values(errors).length > 0) alert ("Please finish the form")
        else{

            postNewProduct(input)
            alert("New Product Save")
            setInput({
                name: "",
                description: "",
                image_url:"",
                price: 0,
                brand: "",
            })
            history.push('/home')
        }
    }

    // function handleDelete(el){
    //     setInput({
    //         ...input,
    //         types: input.types.filter(tem=> tem !== el)
    //     })
    // }

    useEffect(() => {
        dispatch(getBrands());
    }, []);

    return(
        <div className={styles.every}>
            <Link to= '/home' ><button>Home</button></Link>
            <h1 className={styles.title}>NewProduct</h1>
            <form className={styles.form} onSubmit={(e)=>handleSubmit(e)}>
                <div>
                    <label className={styles.label}>name:</label>
                    <input type= "text" value= {input.title} name= "name"onChange={(e)=>handleChange(e)}
                    />
                    {/* {errors.name && (
                    <p className={styles.error}>{errors.name}</p>
                    )} */}
                </div>
                <div>
                    <label className={styles.label}>description:</label>
                    <textarea className={styles.largetext} type= "text"  value= {input.description} name= "description" onChange={(e)=>handleChange(e)}/>
                    {/* {errors.description && (
                    <p className={styles.error}>{errors.description}</p>
                    )} */}
                </div>
                <div>
                    <label className={styles.label}>Image:</label>
                    <input type= "url" value= {input.image_url} name= "image_url" onChange={(e)=>handleChange(e)}/>
                    {/* {errors.image_url && (
                    <p className={styles.error}>{errors.image_url}</p>
                    )} */}
                </div>
                <div>
                    <label className={styles.label}>price:</label>
                    <input type= "number" min="30" max="200" size={3} value= {(input.price)} name= "price" onChange={(e)=>handleChange(e)}/>
                    {/* {errors.price && (
                    <p className={styles.error}>{errors.price}</p>
                    )} */}
                </div>
                
                <div>

                <label>Brand:</label>
                <input type= "text" value= {input.brand} name= "brand" onChange={(e)=>handleChange(e)}
                    />
                    {/* {errors.brand && (
                    <p className={styles.error}>{errors.brand}</p>
                    )} */}
                </div>
                
                
            <button  className={styles.label}type='submit' >Save</button>
            
                
            </form>
           
        </div>
    )




}

