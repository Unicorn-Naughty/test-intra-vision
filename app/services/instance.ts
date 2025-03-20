import axios from "axios";

export const isntance = axios.create({
    baseURL: "http://intravision-task.test01.intravision.ru/"
})