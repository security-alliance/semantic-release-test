import { MyType } from "./types";

export class Frobler {
  public froble(val: MyType): MyType {
    return { foo: val.foo * 100, bar: val.bar * 200 };
  }
}
