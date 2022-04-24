import {GET_PRODUCTS, GET_NAMEPRODUCTS, SET_NAME, GET_BRANDS, FILTER_BY_BRAND, FILTER_CREATED, ORDER_BY_NAME, ORDER_BY_PRICE, GET_DETAILS } from '../actions';


const initialState = {
   products: [],
   allProducts: [],
   brands: [],
   detail: []
   };

   export default function rootReducer(state = initialState, action) {
    switch (action.type) {
      case GET_PRODUCTS:
         return {...state,
          products: action.payload,
          allProducts: action.payload
             };
      case GET_BRANDS:
               return{
                 ...state, 
                 brands: action.payload                                          
             } 
      case FILTER_BY_BRAND:
            const allProducts = state.allProducts
            
            const brandFilter = action.payload === 'brands' ? allProducts :  allProducts.filter(el => el.brand === action.payload);
            
            
            return {...state, products: brandFilter
            } 
      case ORDER_BY_NAME:
              let sortedArr = action.payload === 'asd' ? state.products.sort(function (a, b){
                  if(a.title > b.title){
                      return 1;
                  }
                  if(b.title > a.title){
                      return -1;
                  }
                  return 0;
                }) :
                state.products.sort(function (a, b){
                  if(a.title > b.title){
                    return -1;
                  }
                  if(b.title > a.title){
                    return 1;
                  }
                  return 0
                })
                return{
                  ...state, products: sortedArr
              }  
      case ORDER_BY_PRICE:
              let sortedSArr = action.payload === 'asd' ? state.products.sort(function (a, b){
                  if(a.healthScore > b.healthScore){
                      return 1;
                  }
                  if(b.healthScore > a.healthScore){
                      return -1;
                  }
                  return 0;
                }) :
                state.products.sort(function (a, b){
                  if(a.healthScore > b.healthScore){
                    return -1;
                  }
                  if(b.healthScore > a.healthScore){
                    return 1;
                  }
                  return 0
                })
                console.log('ahora el tema esta aca', sortedSArr)
                return{
                  ...state, products: sortedSArr
              }
      case GET_NAMEPRODUCTS:
            return{
                ...state,
                products: action.payload
            }
      case FILTER_CREATED:
            const allProducts2 = state.allProducts 
            const createdFilter = action.payload === 'created' ? allProducts2.filter(el => el.created) : allProducts2.filter(el => !el.created)   
            return {
                ...state, products: action.payload === 'allProducts' ? state.allProducts : createdFilter
            } 
      case GET_DETAILS:
                return{
                    ...state,
                    detail: action.payload
                }                         
    default:
         return state;
    }}   