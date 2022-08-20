//import axios from "axios"

import { coreAPI } from "@/apis/apiConfig";

class CardsService {
    async getAllCharacters() {
        try {
            const data = await coreAPI.get('/character');
            console.log('passou aqui', data)
            return data;
        } catch (error) {
            return error;
        }

    }
}

export default new CardsService();