import axios from 'axios';

// busca tags cadastradas no banco de dados
export class FetchTags {
    async execute() {
        try {
            const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/tags/`);
            return response;
        } catch (error) {
            console.error("Erro ao buscar tags: ", error);
        }
    }
}