import { describe, expect, it } from "vitest";

const fromIsNotString = "from is not a string";
const toIsNotString = "to is not a string";

const canReconfigure = (from, to) => {
  if (typeof from !== "string") throw new Error(fromIsNotString);
  if (typeof to !== "string") throw new Error(toIsNotString);

  const isSameLength = from.length === to.length;
  if (!isSameLength) return false;

  const hasSameUniqueLetters = new Set(from).size === new Set(to).size;
  if (!hasSameUniqueLetters) return false;

  const transformations = {};
  for (let i = 0; i < from.length; i++) {
    const fromLetter = from[i];
    const toLetter = to[i];

    const storedLetter = transformations[fromLetter];
    if (storedLetter && storedLetter !== toLetter) return false;

    transformations[fromLetter] = toLetter;
  }

  return true;
};

describe("canReconfigure", () => {
  it("should throw if first parameter is not a string", () => {
    expect(() => canReconfigure(1)).toThrow(fromIsNotString);
  });

  it("should throw if second parameter is not a string", () => {
    expect(() => canReconfigure("a")).toThrow(toIsNotString);
  });

  it("should return a boolean", () => {
    expect(canReconfigure("a", "b")).toBeTypeOf("boolean");
  });

  it("should return false if strings provided have different length", () => {
    expect(canReconfigure("a", "bc")).toBe(false);
  });

  it("should return false if strings provided have different length even with same unique letters", () => {
    expect(canReconfigure("aabc", "abc")).toBe(false);
  });

  it("should return false if strings provided have different number of unique letters", () => {
    expect(canReconfigure("abc", "ddd")).toBe(false);
  });

  it("should return false if strings has different order of transformation", () => {
    expect(canReconfigure("XBOX", "XXBO")).toBe(false);
  });
});
