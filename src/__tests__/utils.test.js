
import { isPalindrome } from "../utils";

describe("isPalindrome", () => {
  it("returns true for palindromes", () => {
    expect(isPalindrome("racecar")).toBe(true);
    expect(isPalindrome("mom")).toBe(true);
  });

  it("returns false for non-palindromes", () => {
    expect(isPalindrome("car")).toBe(false);
    expect(isPalindrome("hello")).toBe(false);
  });

  it("returns true for palindromes with mixed case", () => {
    expect(isPalindrome("Racecar")).toBe(true);
    expect(isPalindrome("MadAm")).toBe(true);
  });

  it("returns false for an empty string", () => {
    expect(isPalindrome("")).toBe(false);
  });

  it("throws an error for non-alphabetic characters (bonus)", () => {
    expect(() => isPalindrome("racecar123")).toThrow("Input must only contain alphabetic characters.");
  });

  it("throws an error for non-string input (bonus)", () => {
    expect(() => isPalindrome(123)).toThrow("Input must be a string.");
    expect(() => isPalindrome({})).toThrow("Input must be a string.");
    expect(() => isPalindrome([])).toThrow("Input must be a string.");
  });
});
