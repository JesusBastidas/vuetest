import axios from 'axios';

const URL = "https://api.github.com/search/repositories";

export const apiGet = async (query: string, page: number = 1, perPage: number = 10) => {
    try {
        /* const response = await axios.get(`${URL}?q=${query}&sort=stars&order=desc&page=1&per_page=10`); */
        const response = await axios.get(`${URL}`, {
            params: {
                q: query,
                sort: 'stars',
                order: 'desc',
                page: page,
                per_page: perPage
            },
        });
        return response.data;
    } catch (error) {
        console.error(error);
        return null;
    }
}