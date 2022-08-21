//import axios from "axios"

import { coreAPI } from "@/apis/apiConfig";

class CardsService {
    async getAllCharacters(page, name, status) {
        try {
            const data = await coreAPI.get(`/character/?page=${page}&name=${name}&status=${status}`);
            return data;
        } catch (error) {
            return error;
        }

    }
}

export default new CardsService();