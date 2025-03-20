import { TaskUpdateDTO } from "./TaskUpdateDTO"

export type PickTaskUpdateDTO = Partial<Omit<TaskUpdateDTO, "name" | "description">>

export type TaskCreateDTO = PickTaskUpdateDTO & {
    name: string,
    description: string
}