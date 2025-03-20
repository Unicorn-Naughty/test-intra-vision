import { TaskDTO } from "./TaskDTO"

export type PageResultTaskDTO = {
    value: TaskDTO[]
    nextPageLink: string
    count: number
}