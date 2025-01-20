import { useState, useEffect } from 'react';
import { ProductService } from '../services/ProductService';

interface Product {
  id: number;
  name: string;
  price: number;
  // Agrega más campos según sea necesario
}

const useProducts = (idCollection: string) => {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [ collections, setCollections ] = useState<any[]>([]);

  const productService = new ProductService();

  useEffect(() => {
    if(idCollection){
        fetchProductsByCollection()
    }
    else{ 
        fetchProducts()
    }
  }, [idCollection]);

  const fetchProducts = async () => {
    try {
      let res = await productService.getProducts()        
      let dataProducts = res.data?.products?.edges || []
      setProducts(dataProducts);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const fetchProductsByCollection = async () => {
    try {
      let res = await productService.getProductByCollection(idCollection)  
      let dataProducts = res.data?.collection?.products?.edges || []
      setProducts(dataProducts);
    } catch (err) {
    console.log(err)
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return { products, loading, error, fetchProducts };
};

export default useProducts;