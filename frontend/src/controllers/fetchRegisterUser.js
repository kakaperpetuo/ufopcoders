import axios from 'axios';

export class FetchRegisterUser {
    async execute(name, email, password) {
        const userData = {
            name: name,
            email: email,
            password: password
        };
        
    }
}