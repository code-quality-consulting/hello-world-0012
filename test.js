/*jslint
    node
*/

const assert = require("assert");

function makeGreeting(name) {
    "use strict";
    if (name) {
        return "Hello " + name + "!";
    }
    return "Hello world!";
}

assert.strictEqual(makeGreeting(), "Hello world!");
assert.strictEqual(makeGreeting("Zach"), "Hello Zach!");
console.log("Your test has passed!");
