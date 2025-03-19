export type TSidebarLink = {
    path: string,
    title: string,
    img: string,
    w: number,
    h: number
}
export const sidebarNavConstants: TSidebarLink[] = [
    {
        path: "/knowledge",
        title: "База знаний",
        img: "/sidebar-icons/noun_Book_121819.png",
        w: 22,
        h: 26
    },
    {
        path: "/",
        title: "Заявки",
        img: "/sidebar-icons/noun_File_453295.png",
        w: 18,
        h: 24
    },
    {
        path: "/employees",
        title: "Сотрудники",
        img: "/sidebar-icons/noun_people_1923174.png",
        w: 25,
        h: 17
    },
    {
        path: "/clients-page",
        title: "Клиенты",
        img: "/sidebar-icons/noun_City_1923172.png",
        w: 25,
        h: 26
    },
    {
        path: "/assets-page",
        title: "Активы",
        img: "/sidebar-icons/analytics.png",
        w: 26,
        h: 24
    },
    {
        path: "/settings-page",
        title: "Настройки",
        img: "/sidebar-icons/noun_Settings_1048928.png",
        w: 25,
        h: 24
    },
]