import { create } from "zustand";
import { StatusesDTO } from "../types/StatusesDTO";
import { clientApi } from "../services/api-client";


interface ITaskStore {
    loading: boolean;
    statuses: StatusesDTO;
    fetchStatuses: (id: string) => Promise<void>;
}

export const statusesStore = create<ITaskStore>((set) => ({
    loading: true,
    statuses: [],
    fetchStatuses: async (id: string) => {
        try {
            const data = await clientApi.smthngElse.getStatuses(id)
            set({ statuses: data })
        } catch (error) {
            console.log(error);
        } finally {
            set({ loading: false });
        }
    },
}));