export const formateDate = (date: string) => {
    const nDate = new Date(date)
    return nDate.toLocaleDateString()
}
export const formatDateMonthDD = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('ru-RU', {
      day: 'numeric',
      month: 'long',
      hour: '2-digit',
      minute: '2-digit',
    }).format(date);
  };