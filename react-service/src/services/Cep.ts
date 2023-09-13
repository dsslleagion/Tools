import api from './api';
import { CepProps } from '../types';

class Cep {
    async get(cep: string): Promise<CepProps> {
        const { data } = await api.get(`${cep}/json`);
        return data;
    }
}

const cep = new Cep();
export default cep;