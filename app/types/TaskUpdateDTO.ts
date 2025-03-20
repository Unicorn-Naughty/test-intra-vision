import { EntityDTO } from "./EntityDTO"

export type TaskUpdateDTO = {
    id: number,
    name: string,
    description: string,
    comment?: string
    price: number,
    taskTypeId: number
    statusId: number
    priorityId: number
    serviceId: number
    resolutionDatePlan: string
    tags?: EntityDTO[]
    initiatorId: number
    executorId: number
    executorGroupId: number
}