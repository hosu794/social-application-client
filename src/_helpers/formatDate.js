export function formatDate(date) {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const newDate = new Date(date);

  const fullYear = newDate.getFullYear();
  const month = monthNames[newDate.getMonth()];
  const day = newDate.getDay();
  const hour = newDate.getHours();
  const minutes = newDate.getMinutes();

  return `${hour}:${minutes} ${day} ${month} ${fullYear}`;
}
