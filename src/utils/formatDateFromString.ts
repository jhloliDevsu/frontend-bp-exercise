export const formatDateFromString = (date: string) => {
  const isoDate = (new Date(date)).toISOString();
  const year = isoDate.substring(0, 4);
  const month = isoDate.substring(5, 7);
  const day = isoDate.substring(8, 10);

  return `${day}/${month}/${year}`;
}