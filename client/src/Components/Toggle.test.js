//test toggle function
const { darkMode } = require("./Toggle");
test("is toggle active", () => {
  expect(darkMode).not.toBeTruthy();
});
