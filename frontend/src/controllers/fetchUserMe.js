import axios from 'axios';

export class FetchUserMe {
    async execute(token) {
        try {
            const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/users/me/`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            return response;
        } catch (e) {
            console.error(e);
            console.log("Erro ao buscar usuario logado: ", e);
        }
    }
}