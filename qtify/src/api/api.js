import axios from "axios";

export const BACKEND_ENDPOINT = "https://qtify-backend-labs.crio.do";

export const fetchTopAlbums = async() => {
    try {
        const response = axios.get(`${BACKEND_ENDPOINT}/albums/top`);
        return response.data;
        
    } catch (error) {
        console.log(error) 
    }

};