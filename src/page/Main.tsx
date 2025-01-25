import React, { useEffect, useState } from 'react'
import Header from '../components/Header/Header'
import { SectionProduct } from '../components/SectionProduct/SectionProduct'
import useProducts from '../hooks/useProducts';
import { Collections } from '../components/Collections/Collections';
import { Checkout } from '../components/Checkout/Checkout';

function Main() {

  const [ idCollection, setIdCollection ] = useState('');
  let { products, error, loading, fetchProducts } = useProducts(idCollection);
  const [ showCart, setShowCart ] = useState(false);
  const [ carts, setCarts ] = useState<any>([]);
  
  const handleCart = (value:any) => {
    const newCart = [...carts, value];
    setCarts(newCart);
  }

  const removeFromCart = (index: number) => {
    const newCart = carts.filter((_, i) => i !== index);
    setCarts(newCart);
  };

  return (
    <> 
      <Header numCart={carts.length} setShowCart={setShowCart} />
      {
        showCart ? <Checkout carts={carts} removeFromCart={removeFromCart}/>
        : 
        <>
          <Collections  handleCollection={(value)=>setIdCollection(value)}/>
          <SectionProduct data={products} handleCart={handleCart}/>
        </>
      }
    </>
  )
}

export default Main
