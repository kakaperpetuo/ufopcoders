import axios from 'axios';

export class FetchRegisterUser {
    async execute(name, email, password) {
        const userData = {
            nome: name,
            email: email,
            password: password
        };

        try {
            const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/CreateUser/`, userData);

            return response;
        } catch(e) {
            console.error(e);
            console.log("Erro no registro do usuário: ", e);
        }
    }
}