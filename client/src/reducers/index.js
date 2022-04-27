import {GET_PRODUCTS, GET_NAMEPRODUCTS,  GET_BRANDS, FILTER_BY_BRAND, FILTER_CREATED, ORDER_BY_PRICE, GET_DETAILS } from '../actions';


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
            
            const brandFilter = action.payload === 'brands' ? allProducts :  allProducts.filter(el => {const aux = el.Brands?.map(brn=> brn.name);
              if (aux?.includes(action.payload)) return el;});
            
            
            return {...state, products: brandFilter
            } 
      
      case ORDER_BY_PRICE:
              let sortedSArr = action.payload === 'asd' ? state.products.sort(function (a, b){
                  if(a.price > b.price){
                      return 1;
                  }
                  if(b.price > a.price){
                      return -1;
                  }
                  return 0;
                }) :
                 state.products.sort(function (a, b){
                  if(a.price > b.price){
                    return -1;
                  }
                  if(b.price > a.price){
                    return 1;
                  }
                  return 0
                })
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