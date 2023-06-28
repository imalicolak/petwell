import api from "./apiConfig.ts";

const getToken = () => {
    return new Promise(resolve => {
        resolve(`Token ${localStorage.getItem('knox') || null}`);
    });
};

export const generatePet = async (petData: Object) => {
    try {
        let token = await getToken();
    
        const headers = {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: token as string,
        }
    
        const response = await api.post('/pets', petData, { headers });
        return response.data;
    } catch (error) {
        throw error;
    };
};

export const getPets = async () => {
    try {
        const response = await api.get('/pets');
        return response.data;
    } catch (error) {
        throw error;
    };
};

export const getPet = async (id: Number) => {
    try {
        const response = await api.get(`/pets/${id}`);
        return response.data;
    } catch (error) {
        throw error;
    }
}

export const updatePet = async (petData: Object, id: Number) => {
    try {
        let token = await getToken();

        const headers = {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: token as string,
        }

        const response = await api.put(`/pets/${id}`, petData, { headers });
        return response.data;

    } catch (error) {
        throw error;
    }
}

export const removePet = async (id: Number) => {
    try {
        let token = await getToken();

        const headers = {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: token as string,
        }

        const response = await api.delete(`/pets/${id}`, { headers });
        return response.data;
    } catch (error) {
        throw error;
    }
}