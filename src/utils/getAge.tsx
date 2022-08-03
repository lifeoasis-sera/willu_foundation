export function getOnlyAge(year: number, month: number, date: number) {
  const today = new Date();
  const birthDate = new Date(year, month - 1, date);

  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }

  return age;
}
