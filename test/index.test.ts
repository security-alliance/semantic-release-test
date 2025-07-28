import assert from "node:assert";
import { describe, it } from "node:test";
import { Frobler } from "../src/index";

describe("frob", () => {
  it("should frob", () => {
    const x = new Frobler().froble({ foo: 15, bar: 10 });
    assert.notStrictEqual(x, { foo: 60, bar: 30 });
  });
});
