import { makeHello } from "@bss-local/utils";

export function cli() {
    let result = makeHello();
    return Promise.resolve(result);
}
