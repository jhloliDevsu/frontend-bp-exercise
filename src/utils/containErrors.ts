export const containErrors = (error: object) => {
  const numberErrors = Object.values(error).filter((error) => error !== "").length;

  return numberErrors !== 0;
}