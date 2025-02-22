import axios from "axios";

const apiAddress: string = import.meta.env.VITE_BACK_ADDRESS

export class httpMethods{
    constructor(){

    }

    async get(endPoint: string, token: string, value?: any){
        try{
            if(value){
                let res = await axios.get(`${apiAddress}/${endPoint}/${value}`, {headers: {'Authorization': `Bearer ${token}`}})
                return res
            }else{
                let res = await axios.get(`${apiAddress}/${endPoint}`, {headers: {'Authorization': `Bearer ${token}`}})
                return res
            }
        }catch(err){
            return err
        }
    }

    async post(endPoint: string, token?: string, data?: any){
        try{
            if(token){
                if(data){
                    let res = await axios.post(`${apiAddress}/${endPoint}`, data, {headers: {'Authorization': `Bearer ${token}`}} )
                    return res
                }else{
                    let res = await axios.post(`${apiAddress}/${endPoint}`, {headers: {'Authorization': `Bearer ${token}`}} )
                    return res
                }
            }else{
                let res = await axios.post(`${apiAddress}/${endPoint}`)
                return res
            }
        }catch(err){
            return err
        }
    }

    async put(endPoint: string, token: string, data?: any){
        try{
            if(data){
                let res = await axios.put(`${apiAddress}/${endPoint}`, data, {headers: {'Authorization': `Bearer ${token}`}})
                return res
            }else{
                let res = await axios.put(`${apiAddress}/${endPoint}`, {headers: {'Authorization': `Bearer ${token}`}})
                return res
            }
        }catch(err){
            return err
        }
    }

    async patch(endPoint: string, token: string, data?: any){
        try{
            if(data){
                let res = await axios.patch(`${apiAddress}/${endPoint}`, data, {headers: {'Authorization': `Bearer ${token}`}})
                return res
            }else{
                let res = await axios.patch(`${apiAddress}/${endPoint}`, {headers: {'Authorization': `Bearer ${token}`}})
                return res
            }
        }catch(err){
            return err
        }
    }

    async delete(endPoint: string, token: string, value?: any){
        try{
            if(value){
                let res = await axios.delete(`${apiAddress}/${endPoint}/${value}`, {headers: {'Authorization': `Bearer ${token}`}})
                return res
            }else{
                let res = await axios.delete(`${apiAddress}/${endPoint}`, {headers: {'Authorization': `Bearer ${token}`}})
                return res
            }
        }catch(err){
            return err
        }
    }
}