import { isntance } from "../instance"

export const getUsers = async (tenantguid: string)=>{
    const {data} = await isntance.get(`/api/${tenantguid}/Users`)
    return data
}