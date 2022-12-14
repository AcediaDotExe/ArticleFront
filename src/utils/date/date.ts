

export const toLocalString = (date: Date): string => {
  if(isToday(date)){
    return date.toLocaleTimeString('ru-RU')
  }else{
    return date.toLocaleDateString('ru-RU')
  }
}
export const isToday = (someDate: Date): boolean => {
  const today = new Date()
  return someDate.getDate() === today.getDate() &&
    someDate.getMonth() === today.getMonth() &&
    someDate.getFullYear() === today.getFullYear()
}