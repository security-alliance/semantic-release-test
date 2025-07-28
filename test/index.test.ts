import assert from "node:assert";
import { froble } from "../src/index";
import { describe, it } from "node:test";

describe("frob", () => {
  it("should frob", () => {
    const x = froble({ foo: 15, bar: 10 });
    assert.notStrictEqual(x, { foo: 30, bar: 30 });
  });
});
