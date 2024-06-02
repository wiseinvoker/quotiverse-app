export const getWeeks = () => {
  const today = new Date();
  const dayOfWeek = today.getDay();
  const targetDayOfWeek = 4;
  let daysToLastThursday = dayOfWeek - targetDayOfWeek;
  if (daysToLastThursday <= 0) {
    daysToLastThursday += 7; // Ensure positive difference
  }
  const twoWeeksAgoThursday = new Date(today.setDate(today.getDate() - daysToLastThursday - 14));

  console.log(twoWeeksAgoThursday.toDateString());
  const weeks = [];
  const startDateStr = `${twoWeeksAgoThursday.getFullYear()}-${twoWeeksAgoThursday.getMonth() + 1}-${twoWeeksAgoThursday.getDate()}`
  // console.log('weeks', startDateStr)
  let currentDate = new Date(startDateStr);

  for (let i = 0; i < 7; i++) { // Assuming you want 7 weeks as in the example
    const startDay = currentDate.getDate();
    const startMonth = currentDate.toLocaleString('en', { month: 'short' });

    // Add 6 days to get the end of the week
    const endDate = new Date(currentDate);
    endDate.setDate(endDate.getDate() + 6);

    const endDay = endDate.getDate();
    const endMonth = endDate.toLocaleString('en', { month: 'short' });

    let monthRange = startMonth;
    if (startMonth !== endMonth) {
      monthRange = `${startMonth}-${endMonth}`;
    }

    weeks.push({
      month: monthRange,
      startDay: `${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${currentDate.getDate()}`,
      days: `${startDay.toString().padStart(2, '0')}-${endDay.toString().padStart(2, '0')}`,
    });

    // Set currentDate to the next day after endDate
    currentDate = new Date(endDate);
    currentDate.setDate(currentDate.getDate() + 1);
  }
  // console.log('weeks: ', weeks)
  return weeks;
}

export const getWeekNumber = (date) => {
  const currentDate = date ? new Date(date) : new Date();
  const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
  const firstDayOfWeek = firstDayOfMonth.getDay() === 0 ? 7 : firstDayOfMonth.getDay(); // Adjust if Sunday is first day of week
  const offsetDate = currentDate.getDate() + firstDayOfWeek - 1; // Adjusting to include the offset of the first week starting day
  const weekNumber = Math.ceil(offsetDate / 7);
  return weekNumber;
};

export const getThursdayOfCurrentWeek = () => {
  const today = new Date();
  const dayOfWeek = today.getDay();

  const targetDayOfWeek = 4;

  let daysToThursday;
  if (dayOfWeek <= targetDayOfWeek) {
    daysToThursday = targetDayOfWeek - dayOfWeek;
  } else {
    daysToThursday = (7 - dayOfWeek) + targetDayOfWeek;
  }

  const thursdayOfCurrentWeek = new Date(today.setDate(today.getDate() + daysToThursday));

  thursdayOfCurrentWeek.setHours(0, 0, 0, 0);

  return `${thursdayOfCurrentWeek.getFullYear()}-${thursdayOfCurrentWeek.getMonth() + 1}-${thursdayOfCurrentWeek.getDate()}`
}
