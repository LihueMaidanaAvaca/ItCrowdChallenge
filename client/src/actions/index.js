import axios from 'axios';
// import { bindActionCreators } from 'redux';
export const GET_PRODUCTS = 'GET_PRODUCTS'
export const GET_NAMEPRODUCTS = 'GET_NAMEPRODUCTS'
export const SET_NAME = 'SET_NAME'
export const GET_BRANDS = 'GET_BRANDS'
export const FILTER_BY_BRAND = 'FILTER_BY_BRAND'
export const FILTER_CREATED = 'FILTER_CREATED'
export const ORDER_BY_NAME = 'ORDER_BY_NAME'
export const ORDER_BY_PRICE = 'ORDER_BY_PRICE'
export const GET_DETAILS = 'GET_DETAILS'



export function getProducts() {
    return async function(dispatch){
        try{
            
            var json = await axios("http://localhost:3001/products");
            console.log('action', json.data)
            return dispatch({
                type: GET_PRODUCTS,
                payload: json.data
            })
        } catch{console.log('error en la api')}
    }
}

export function getNameProduct(name){
    
    return async function(dispatch){
        try{
            var json = await axios("http://localhost:3001/products?name="+name);
            return dispatch ({
                type : GET_NAMEPRODUCTS,
                payload: json.data
            })
        }catch (error){
            console.log(error)
        }
    }
}

export function setFilterName(name){
    return ({
        type : SET_NAME,
        payload: name
    })

}

export function getBrands(){
    return async function (dispatch) {
        try{

            var info = await axios("http://localhost:3001/brands", {
                
            });
            return dispatch({ 
                type: GET_BRANDS,
                payload: info.data
            })
        }catch{console.log('error api type')}
    }
}

export async function postNewProduct(payload){
    
    const response = await axios.post("http://localhost:3001/product", payload);
    return response;

}

export function filterByBrand(payload){
    return {
        type: FILTER_BY_BRAND,
        payload
    }
}

export function filterCreated(payload){
    return{
        type: FILTER_CREATED,
        payload
    }
}

export function orderByName(payload){
    return{
        type: ORDER_BY_NAME,
        payload
    }
}

export function orderByPrice(payload){
    return{
        type: ORDER_BY_PRICE,
        payload
    }
}

export function getDetail(id){
    return async function(dispatch){
        try{
            var json = await axios.get("http://localhost:3001/products/"+id);
            return dispatch({
                type: GET_DETAILS,
                payload: json.data
            })
        } catch(error){
            console.log(error)
        }
    }
 }