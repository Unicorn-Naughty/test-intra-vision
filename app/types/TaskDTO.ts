import { EntityDTO } from "./EntityDTO"
import { TaskLifetimeItemDTO } from "./TaskLifetimeItemDTO"

export type TaskDTO = {
    id: number
    name: string
    description: string
    createdAt: string
    updatedAt: string
    price: number
    taskTypeId:number
    taskTypeName:string
    statusId: number
    statusName:string
    statusRgb:string
    priorityId: number
    priorityName:string
    serviceId: number
    serviceName: string
    resolutionDatePlan: string
    tags: EntityDTO[]
    initiatorId: number
    initiatorName: string
    executorId: number
    executorName: string
    executorGroupId: number
    executorGroupName: string
    lifetimeItems:	TaskLifetimeItemDTO[]
}