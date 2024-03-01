export function getFormattedDate(firebaseDate: any): string {
  console.log('the received date', firebaseDate);
  const dateObj = new Date(firebaseDate);
  console.log('date obj', dateObj);
  const formattedDate = `${dateObj.getDate()}-${dateObj.getMonth()}-${dateObj.getFullYear()}`;

  return formattedDate;
}
