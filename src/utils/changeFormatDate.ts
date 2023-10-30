const getKoreanDayOfWeek = (date: Date) => {
  const daysInKorean = ['일', '월', '화', '수', '목', '금', '토'];
  const dayOfWeek = date.getDay();

  return daysInKorean[dayOfWeek];
};

export const changeFormatDate = (date: Date) => {
  const dates = new Date(date);
  const year = dates.getFullYear();
  const month = dates.getMonth() + 1;
  const day = dates.getDate();
  const koreanDayOfWeek = getKoreanDayOfWeek(dates);

  return `${year}.${month}.${day} (${koreanDayOfWeek})`;
};
