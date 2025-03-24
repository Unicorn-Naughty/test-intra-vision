import { create } from "zustand";
import { clientApi } from "../services/api-client";
import { PrioritiesDTO } from "../types/PrioritiesDTO";


interface ITaskStore {
    loading: boolean;
    priorities: PrioritiesDTO[];
    fetchPriorities: (id: string) => Promise<void>;
}

export const prioritiesStore = create<ITaskStore>((set) => ({
    loading: true,
    priorities: [],
    fetchPriorities: async (id: string) => {
        try {
            const data = await clientApi.statusesAndPriorities.getPriorities(id)
            set({ priorities: data })
        } catch (error) {
            console.log(error);
        } finally {
            set({ loading: false });
        }
    },
}));