import { useState, useEffect } from 'react';
import { ProductService } from '../services/ProductService';
import { CollectionService } from '../services/CollectionService';

interface Product {
  id: number;
  name: string;
  price: number;
  // Agrega más campos según sea necesario
}

const useCollections = () => {

  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [ collections, setCollections ] = useState<any[]>([]);

  const collectionService = new CollectionService();

  useEffect(() => {
    fetchCollections();
  }, []);

  const fetchCollections = async () => {
    try {
      let res = await collectionService.getCollections()        
      let resData = res.data?.collections?.edges || []
      setCollections(resData);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return { collections, loading, error };
};

export default useCollections;