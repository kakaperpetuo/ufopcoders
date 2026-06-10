import axios from 'axios';

export class FetchUserAuthentication {
    async execute(email, pass) {
        const userData = {
            email: email,
            password: pass
        };

        try {
            const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/PostLogin/`, userData);

            return response;
        } catch(e) {
            console.error(e);
            console.log("Erro no login do usuário: ", e);
        }
    }
};