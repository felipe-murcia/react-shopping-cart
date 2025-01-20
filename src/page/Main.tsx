import React, { useEffect, useState } from 'react'
import Header from '../components/Header/Header'
import { SectionProduct } from '../components/SectionProduct/SectionProduct'
import useProducts from '../hooks/useProducts';
import { Collections } from '../components/Collections/Collections';

function Main() {

  const [ idCollection, setIdCollection ] = useState('');
  let { products, error, loading, fetchProducts } = useProducts(idCollection);

//   useEffect(() => {
//     alert('se mpmtp')
//     fetchProducts();
//   }, []);

  return (
    <>
      <Header/>

      <Collections  handleCollection={(value)=>setIdCollection(value)}/>

      <SectionProduct data={products}/>
    </>
  )
}

export default Main
