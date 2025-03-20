import axios from "axios";

export const isntance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API
})