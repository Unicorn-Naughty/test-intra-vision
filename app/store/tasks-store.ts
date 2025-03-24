import { create } from "zustand";
import { TaskDTO } from "../types/TaskDTO";
import { clientApi } from "../services/api-client";
import { TaskUpdateDTO } from "../types/TaskUpdateDTO";
import { statusesStore } from "./statuses-store";
import { usersStore } from "./users-store";
import { TaskCreateDTO } from "../types/TaskCreateDTO";

interface ITasksStore {
    loading: boolean;
    tasks: TaskDTO[];
    fetchTasks: (id: string) => Promise<void>;
    updateTaskStatus: (id: string, body: TaskUpdateDTO) => Promise<void>
    updateTaskExecutor: (id: string, body: TaskUpdateDTO) => Promise<void>
    updateTaskComments: (id: string, body: TaskUpdateDTO) => Promise<void>
    createTask: (id: string, body: TaskCreateDTO) => Promise<number>
}

export const taskStore = create<ITasksStore>((set) => ({
    loading: true,
    tasks: [],
    fetchTasks: async (id: string) => {
        try {
            const data = await clientApi.tasks.getAllTasks(id);
            const tasksWithDetails = await Promise.all(
                data.value.map(async (task) => {
                    const taskDetails = await clientApi.tasks.getOneTask(id, task.id);
                    return { ...task, ...taskDetails };
                })
            );

            set({ tasks: tasksWithDetails });
        } catch (error) {
            console.log(error);
        } finally {
            set({ loading: false });
        }
    },
    updateTaskStatus: async (id: string, body: TaskUpdateDTO) => {
        try {
            await clientApi.tasks.putTask(id, body);
            const statuses = statusesStore.getState().statuses;
            const neededStatus = statuses.find((status) => status.id === body.statusId);

            if (!neededStatus) {
                console.error("Status not found for the given statusId:", body.statusId);
                return;
            }

            set((state) => ({
                tasks: state.tasks.map((task) =>
                    task.id === body.id
                        ? {
                            ...task,
                            statusName: neededStatus.name,
                            statusId: neededStatus.id,
                            statusRgb: neededStatus.rgb,
                        }
                        : task
                ),
            }));
            alert("Статус изменен")
        } catch (error) {
            console.error("Error updating task:", error);
        }
    },
    updateTaskExecutor: async (id: string, body: TaskUpdateDTO) => {
        try {
            await clientApi.tasks.putTask(id, body)
            const users = usersStore.getState().users
            const neededUser = users.find((user) => user.id === body.executorId)
            if (!neededUser) {
                console.error("Status not found for the given statusId:", body.statusId);
                return;
            }
            set((state) => ({
                tasks: state.tasks.map((task) => task.id === body.id ? {
                    ...task,
                    executorName: neededUser.name,
                    executorId: neededUser.id
                } : task)
            }))
            alert("Исполнитель изменен")
        } catch (error) {
            console.log(error);

        }
    },
    updateTaskComments: async (id: string, body: TaskUpdateDTO) => {
        try {
            await clientApi.tasks.putTask(id, body);

            set((state) => ({
                tasks: state.tasks.map((task) =>
                    task.id === body.id
                        ? {
                            ...task,
                            lifetimeItems: [
                                {
                                    id: new Date().getTime(), // Generate a unique ID
                                    userName: id, // Replace with actual user name
                                    lifetimeType: 10, // Set an appropriate lifetimeType
                                    createdAt: new Date().toISOString(),
                                    comment: body.comment || '',
                                    fieldName: '', // Set appropriate field name if needed
                                    oldFieldValue: '', // Set appropriate old field value if needed
                                    newFieldValue: '', // Set appropriate new field value if needed
                                },
                                ...task.lifetimeItems, // Spread existing items after the new item
                            ],
                        }
                        : task
                ),
            }));
        } catch (error) {
            console.log(error);
        }
    },
    createTask: async (id: string, body: TaskCreateDTO) => {
        try {
            const postId = await clientApi.tasks.postTask(id, body);
            if (postId) {
                const newTask = {
                    id: postId,
                    name: body.name,
                    description: body.description,
                    createdAt: new Date().toISOString(),
                    updatedAt: new Date().toISOString(),
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
                };
                set(state => ({
                    tasks: [...state.tasks, newTask]
                }));
                alert("Задача создана");
                return newTask.id;
            }
        } catch (error) {
            console.log(error);
        }
    }

}));