const { formatDate } = require("../../_helpers/formatDate");

describe("Test for formatDate function", () => {
  test("should return correct date", () => {
    let newDate = new Date("May 1,2019 11:20:00");

    let given = formatDate(newDate);

    let expected = "11:20 1 May 2019";

    expect(given).toEqual(expected);
  });

  test("should return correct date", () => {
    let newDate = new Date(2019, 5, 3);

    let given = formatDate(newDate);

    let expected = "0:0 3 June 2019";

    expect(given).toEqual(expected);
  });
});
