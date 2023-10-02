import { getHigher, timeDiference } from "../dateParser";

test("get higher date", () => {
  const dates = [
    { date: "09/21/2023", id: 1 },
    { date: "12/08/2023", id: 3 },
    { date: "07/09/2022", id: 2 },
  ];
  expect(getHigher(dates)).toBe(3);
});

test("get recent date with same date", () => {
  const dates = [
    { date: "09/21/2023", id: 1 },
    { date: "09/21/2023", id: 4 },
    { date: "09/21/2023", id: 2 },
  ];
  expect(getHigher(dates)).toBe(4);
});

// test("get difference", () => {
//   expect(timeDiference("9/21/2023")).toBe(7);
//   expect(timeDiference("9/02/2023")).toBe(26);
//   expect(timeDiference("5/28/2023")).toBe(122);
//   expect(timeDiference("6/02/2023")).toBe(118);
//   expect(timeDiference("6/06/2022")).toBe(479);
//   expect(timeDiference("1/06/2022")).toBe(630);
//   expect(timeDiference("1/06/2020")).toBe(1361);
//   expect(timeDiference("1/06/2000")).toBe(8666);
// });
