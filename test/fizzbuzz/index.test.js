import { describe, expect, it } from "vitest";
import { fizzbuzz, notNumberError } from "../../src/fizzbuzz";

describe("fizzbuzz", () => {
  //   it("should be a function", () => {
  //     expect(typeof fizzbuzz).toBe("function");
  //   });

  it("should throw if not number is provided as parameter", () => {
    expect(() => fizzbuzz()).toThrow();
  });

  it("should throw a specific error message if not number is provided as parameter", () => {
    expect(() => fizzbuzz(NaN)).toThrow(notNumberError);
  });

  it("should return 1 if number provided is 1", () => {
    expect(fizzbuzz(1)).toBe(1);
  });

  //   it("should return 2 if number provided is 2", () => {
  //     expect(fizzbuzz(2)).toBe(2);
  //   });

  //   it("should return 'fizz' if number provided is 3", () => {
  //     expect(fizzbuzz(3)).toBe("fizz");
  //   });

  it("should return 'fizz' if number provided is multiple of 3", () => {
    expect(fizzbuzz(1 * 3)).toBe("fizz");
    expect(fizzbuzz(2 * 3)).toBe("fizz");
    expect(fizzbuzz(3 * 3)).toBe("fizz");
  });

  it("should return 'buzz' if number provided is multiple of 5", () => {
    expect(fizzbuzz(1 * 5)).toBe("buzz");
    expect(fizzbuzz(2 * 5)).toBe("buzz");
  });

  it("should return 'fizzbuzz' if number provided is multiple of 3 and 5", () => {
    expect(fizzbuzz(3 * 5)).toBe("fizzbuzz");
  });
});
