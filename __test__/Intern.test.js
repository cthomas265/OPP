const Intern = require("../lib/Intern");
test("Can set school account via constructor", () => {
  const testValue = "schoolName";
  const e = new Intern("John", 1, "test@test.com", testValue);
  expect(e.school).toBe(testValue);
});
test("getRole() should return \"Intern\"", () => {
  const testValue = "Intern";
  const e = new Intern("John", 1, "test@test.com", "schoolName");
  expect(e.getRole()).toBe(testValue);
});
test("Can get GitHub username via getGithub()", () => {
  const testValue = "schoolName";
  const e = new Intern("John", 1, "test@test.com", testValue);
  expect(e.getSchool()).toBe(testValue);
});