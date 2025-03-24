import { create } from "zustand"
import { TaskDTO } from "../types/TaskDTO"
import { clientApi } from "../services/api-client"

interface IOneTaskStore {
    loading: boolean
    task: TaskDTO
    fetchOneTask: (tenantguid: string, postId: number) => void
}

export const oneTaskStore = create<IOneTaskStore>((set) => ({
    loading: true,
    task: {
        id: 0,
        name: "",
        description: "",
        createdAt: "",
        updatedAt: "",
        price: 0,
        taskTypeId: 0,
        taskTypeName: "",
        statusId: 0,
        statusName: "",
        statusRgb: "",
        priorityId: 0,
        priorityName: "",
        serviceId: 0,
        serviceName: "",
        resolutionDatePlan: "",
        tags: [],
        initiatorId: 0,
        initiatorName: "",
        executorId: 0,
        executorName: "",
        executorGroupId: 0,
        executorGroupName: "",
        lifetimeItems: []
    },
    fetchOneTask: async (tenantguid: string, postId: number) => {
        try {
            const task = await clientApi.tasks.getOneTask(tenantguid, postId)
            set({ task })
        } catch (error) {
            alert(error)
        } finally {
            set({ loading: false })
        }
    }

}))