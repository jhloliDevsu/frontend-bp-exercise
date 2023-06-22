export const isDate = (date: string) => {
  const items = date.split("/");

  if (items.length !== 3) return false;

  const [day, month, year] = items;

  if (day === "" || month === "" || year === "") return false;

  return !isNaN(Date.parse(`${year}-${month}-${day}`));
}