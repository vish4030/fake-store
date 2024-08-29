import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getProductFromApi } from '../sliceReducer/ProductReducer';



const Product = () => {
    const dispatch = useDispatch();
    const products = useSelector(state=>state.pr.products);
    useEffect(()=>{
        dispatch(getProductFromApi());
    },[])
    console.log("before return : ",products);
    return(
        <>
        <h2>Showing products</h2>
        {
            products.map(product=>{return(
                <div key={product.id} className="box">
                        <h3>{product.title}</h3>
                        <p>
                            <img src={product.image} width="150" alt={product.title} /> <br />
                            {product.price}
                        </p>
                        <p>
                            <input type="button" value="Add to cart" />
                        </p>
                </div>
            )})
        }
    </>
    )
}

export default Product