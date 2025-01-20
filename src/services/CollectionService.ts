import { api } from "../configs/axios";
import { queryCollections, queryProduct } from "../constant/query";

export class CollectionService {

    private apiURL = "";

    public async getCollections() {
        try {
            const response = await api.get(`?query=${queryCollections}`)
            return await response.data            
        } catch (error) {
            console.log(error)
            throw error;
        }
    } 

}