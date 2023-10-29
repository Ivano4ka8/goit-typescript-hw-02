/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum weekDay {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

function isWeekend(day: string): boolean {
  for (let i: number = 0; i <= 6; i++) {
    if (day === "Saturday" || "Sunday") {
      return true;
    }
  }
  return false;
}
