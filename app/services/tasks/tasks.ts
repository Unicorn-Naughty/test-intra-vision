import { PageResultTaskDTO } from "@/app/types/PageResult[TaskDTO]"
import { isntance } from "../instance"
import { TaskDTO } from "@/app/types/TaskDTO"
import { TaskUpdateDTO } from "@/app/types/TaskUpdateDTO"
import { TaskCreateDTO } from "@/app/types/TaskCreateDTO"

export const getAllTasks = async (tenantguid: string) => {
    const { data } = await isntance.get<PageResultTaskDTO>(`/odata/tasks?tenantguid=${tenantguid}`)
    return data
}

export const getOneTask = async (tenantguid: string, postId: number) => {
    const { data } = await isntance.get<TaskDTO>(`/api/${tenantguid}/Tasks/${postId}`)
    return data
}

export const putTask = async (tenantguid: string, body: TaskUpdateDTO) => {
    const { data } = await isntance.put(`/api/${tenantguid}/Tasks`, body)
    return data
}

export const postTask = async (tenantguid: string, body: TaskCreateDTO) => {
    const { data } = await isntance.post(`/api/${tenantguid}/Tasks`, body)
    return data
}