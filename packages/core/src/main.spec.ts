import test from "ava";
import { cli } from "./main";

test("test", async t => {
    const actual = await cli();
    t.deepEqual(actual, 'Hello');
});

