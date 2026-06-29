import axios from 'axios';

// atualiza dados do usuário logado
export class FetchPatchUserMe {
    async execute(token, data) {
        try {
            const response = await axios.patch(`${import.meta.env.VITE_API_URL}/api/users/me/`, data, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            return response;
        } catch (error) {
            console.error("Erro ao atualizar usuário: ", error)
        }
    }
}