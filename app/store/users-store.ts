import { create } from "zustand";
import { clientApi } from "../services/api-client";
import { UserDTO } from "../types/UserDTO";


interface ITaskStore {
    loading: boolean;
    users: UserDTO[];
    fetchUsers: (id: string) => Promise<void>;
}

export const usersStore = create<ITaskStore>((set) => ({
    loading: true,
    users: [],
    fetchUsers: async (id: string) => {
        try {
            const data = await clientApi.users.getUsers(id)
            set({ users: data })
        } catch (error) {
            console.log(error);
        } finally {
            set({ loading: false });
        }
    },
}));