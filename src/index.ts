import { MyType } from "./types";

export const froble = (val: MyType): MyType => {
    return { foo: val.foo * 2, bar: val.bar * 3 };
}