import { isntance } from "../instance"

export const getTenantGuid = async () => {
    const { data } = await isntance.get<string>('/api/Tenants')
    return data
}