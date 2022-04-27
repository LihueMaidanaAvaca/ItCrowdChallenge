import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getProducts, filterByBrand, filterCreated, getBrands, orderByName, orderByPrice} from '../../actions';
import { Link } from 'react-router-dom';
import Card from '../cards/Cards';
import Paginate from '../paginate/Paginate';
import styles from './Home.module.css'

export function Home(){
    const dispatch= useDispatch()
    const products = useSelector((state) => state.products)
    const [orden, setOrden] = useState('')
    const [loading, setLoading] = useState(true)
    const [currentPage, setCurrentPage] = useState(1)
    const [productsPerPage, setProductsPerPage] = useState(9)
    const indexOfLastProduct = currentPage * productsPerPage
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage
    const currentProduct = products.slice(indexOfFirstProduct, indexOfLastProduct)
    const brands = useSelector((state) => state.brands)
    
    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

    useEffect(()=>{
        dispatch(getProducts());
        setLoading(false)
    },[dispatch])

    function handleClick(e){
        e.preventDefault();
        dispatch(getProducts());
    }

    function handleFilterBrand(e){
        dispatch(filterByBrand(e.target.value))
    }

    
    function handleSortPrice(e){
        e.preventDefault();
        dispatch(orderByPrice(e.target.value))
        setCurrentPage(1);
        setOrden(`Ordered ${e.target.value}`)    
    }

    useEffect(() => {
        dispatch(getBrands());
    }, []);

    return(
        <div className={styles.every}>
            
            <header className={`${styles.title}`}> HighHigh 
            
            <Link to= '/new' className={styles.newpro}>+</Link>
            
                
                <select className={styles.options} defaultValue='default' onChange= {e => handleSortPrice(e)}>
                <option value='default' disabled='disabled'>Price</option>
                    <option value= 'asd'>low</option>
                    <option value= 'des'>high</option>
                </select>
                
                <select className={styles.options} defaultValue='default' onChange={(e)=>handleFilterBrand(e)}>
                     <option value='default' disabled='disabled' name='brand' key={'a'} >Brands</option>
                     {brands.map((d,i)=>(
                         <option name='brands'key={i} value={d.name}>{d.name}</option>
                         ))}
                 </select>
                
                     </header>
            <div  >
                
            </div>
                   <Paginate
                   productsPerPage= {productsPerPage}
                   products={products.length}
                   paginate= {paginate}
                   />  
               <div className={styles.cards} >
 
                { !loading ? currentProduct?.map(product=>{
                    // console.log();
                    return (
                        <div key={product.id}>
                           <Link to={`/${product.id}`}>
                           <Card name={product.name} image_url={product.image_url} price={product.price}
                                 brand={product.brand} logo_url={product.Brands[0].logo_url}
                           />
                           </Link>
                       </div> 
                        );
                     }):<p>Loading...</p>
                 }
                 </div>
 
        </div>
        
        )

















}