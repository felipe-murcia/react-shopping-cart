import { api } from "../configs/axios";
import { queryProduct, queryProductsByCollection } from "../constant/query";

export class ProductService {

    private apiURL = "";

    public async getProducts() {
        try {
            const response = await api.get(`?query=${queryProduct}`)
            return await response.data            
        } catch (error) {
            console.log(error)
            throw error;
        }
    } 

    public async getProductByCollection(idCollection:string) {
        try {
            console.log('llamando por api by collec')
            idCollection = idCollection.replace('gid://shopify/Collection/','')
            let query = queryProductsByCollection.replace('----',idCollection)
            const response = await api.get(`?query=${query}`)
            return await response.data            
        } catch (error) {
            console.log(error)
            throw error;
        }
    } 
}