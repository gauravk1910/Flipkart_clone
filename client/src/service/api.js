import axios from 'axios';

const URL='http://localhost:8000';

export const authenticateSignup = async(data) =>{
    try{
        return await axios.post(`${URL}/signup`, data);
    } catch(error){
        console.log('Error while calling Signup api', error);
    }
}

export const authenticateLogin = async(data) =>{
    try{
        return await axios.post(`${URL}/login`, data);
    } catch(error){
        console.log('Error while calling login api', error);
         return error.response;
    }
}

export const payUsingPaytm= async (data) => {
    try{
        let response = await axios.post(`${URL}/paymnet`, data);
        return  response.data;
    } catch (error) {
        console.log('Error while calling payment api', error);
    }
}