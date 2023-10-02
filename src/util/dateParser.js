// const dates = [
//     { date: "09/21/2023", id: 1 },
//     { date: "12/08/2023", id: 3 },
//     { date: "07/09/2022", id: 2 },
//   ];
const getHigher = (dates) => {
  let higherNumber = 0;
  let id_higherNumber = 0;
  const splitDate = dates.map((el) => {
    const elementsDate = el.date.split("/");

    return {
      date: elementsDate[2] + elementsDate[0] + elementsDate[1],
      id: el.id,
    };
  });

  splitDate.forEach((element) => {
    if (element.date > higherNumber) {
      higherNumber = element.date;
      id_higherNumber = element.id;
    }
    if (element.date == higherNumber) {
      if (element.id > id_higherNumber) {
        id_higherNumber = element.id;
      }
    }
  });

  return id_higherNumber;
};

const timeDiference = (date) => {
  const currentDate = new Date();

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth() + 1;
  const day = currentDate.getDate();

  const dayMonth = [0, 31, 59, 90, 121, 151, 182, 213, 243, 274, 304, 335];

  const elementDate = date.split("/");
  const lastYear = parseInt(elementDate[2]);
  const lastMonth = parseInt(elementDate[0]);
  const lastDay = parseInt(elementDate[1]);

  if (year === lastYear) {
    if (month === lastMonth) {
      return day - lastDay;
    }
    if (month !== lastMonth) {
      return day + dayMonth[month - 1] - (lastDay + dayMonth[lastMonth - 1]);
    }
  }

  if (year !== lastYear) {
    let monthInDays = day + dayMonth[month - 1];
    let elementDateInDays = lastDay + dayMonth[lastMonth - 1];

    let differenceBetweenYears = (year - lastYear) * 365;
    const diff = year - lastYear;

    for (let i = 0; i <= diff; i++) {
      if ((lastYear + i) % 4 === 0) {
        if ((lastYear + i) % 100 !== 0) {
          differenceBetweenYears = differenceBetweenYears + 1;
        } else {
          if ((lastYear + i) % 400 === 0) {
            differenceBetweenYears = differenceBetweenYears + 1;
          }
        }
      }
    }

    return (
      parseInt(differenceBetweenYears) -
      parseInt(elementDateInDays) +
      parseInt(monthInDays)
    );
  }
};

export { getHigher, timeDiference };
