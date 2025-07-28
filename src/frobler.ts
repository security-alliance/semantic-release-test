import { MyType } from "./types";

export class Frobler {
  public froble(val: MyType): MyType {
    console.log('test');
    return { foo: val.foo * 4, bar: val.bar * 3 };
  }
}
