export const formateDate = (date: string) => {
    const nDate = new Date(date)
    return nDate.toLocaleDateString()
}
export const formatDateMonthDD = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('ru-RU')
  };