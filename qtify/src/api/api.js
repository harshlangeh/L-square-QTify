import axios from 'axios';

export const BACKEND_ENDPOINT = 'https://qtify-backend-labs.crio.do';

export const fetchTopAlbums = async () => {
    try {
        const res = await axios.get(`${BACKEND_ENDPOINT}/albums/top`);
        console.log(res.data);
        return res.data;
    } catch (error) {
        console.log(error);
    }
}

export const fetchNewAlbums = async () => {
    try {
        const res = await axios.get(`${BACKEND_ENDPOINT}/albums/new`);
        return res.data;
    } catch (error) {
        console.log(error);
    }
}

export const fetchSongs = async () => {
    try {
        const res = await axios.get(`${BACKEND_ENDPOINT}/songs`);
        return res.data;
    } catch (error) {
        console.log(error);
    }
}

export const fetchFilters = async () => {
    try {
        const res = await axios.get(`${BACKEND_ENDPOINT}/genres`);
        return res.data;
    } catch (error) {
        console.log(error);
    }
}