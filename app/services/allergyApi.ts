import api from "./apiConfig";

const getToken = () => {
    return new Promise(resolve => {
        resolve(`Token ${localStorage.getItem('knox') || null}`);
    });
};

export const generateAllergy = async (allergyData: Object, petId: Number) => {
    try {
        let token = await getToken();
    
        const headers = {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: token as string
        };
    
        const response = await api.post(`/pets/${petId}/allergies`, allergyData, { headers }) 
        return response.data;

    } catch (error) {
        throw error;
    }
};