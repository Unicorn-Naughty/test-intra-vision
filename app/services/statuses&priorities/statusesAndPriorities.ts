import { StatusesDTO } from "@/app/types/StatusesDTO"
import { isntance } from "../instance"

export const getStatuses = async (id:string)=>{
    const {data} = await isntance.get<StatusesDTO>(`/api/${id}/Statuses`)
    return data
}
export const getPriorities = async (id:string)=>{
    const {data} = await isntance.get<StatusesDTO>(`/api/${id}/Priorities`)
    return data
}