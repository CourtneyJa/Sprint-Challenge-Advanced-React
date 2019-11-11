//test players - is rendering but still test

const { player } = require("./Players");

test("component did mount", () => {
  expect(player).not.toBeNull();
});
