import { makeHello } from "@bss/utils";

export function cli() {
    let result = makeHello();
    return Promise.resolve(result);
}
