import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { dislike, fetchProducts, like } from '../app/productsSlice';

export const ProductsLikePage = () => {
  const {products, status, error} = useSelector((state)=>state.products);
  const dispatch = useDispatch()
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(4);

  useEffect(()=>{
    dispatch(fetchProducts())
  },[])

  let buttonArray = Math.ceil(products.length / limit)

  return (
    <div>
      {products.length > 0 && products.slice(page*limit-limit, page*limit).map((product)=> <div key={product.id}>
        <h4>{product.id}</h4>
        <p>{product.title}</p>
        <button onClick={()=>dispatch(like({id: product.id}))}>like {product.like}</button>
        <button onClick={()=>dispatch(dislike({id: product.id}))}>dislike {product.dislike}</button>
      </div> )}
      <div style={{cursor: "pointer"}}>
        {page > 1 && <span onClick={()=>setPage(page-1)}>◀️</span>}
        {[...Array(buttonArray)].map((_,i)=> <span key={i+1} onClick={()=>setPage(i+1)} >{i+1}</span> )}
        {buttonArray > page && <span onClick={()=>setPage(page+1)}>▶️</span>}
      </div>    
    </div>
  )
}
