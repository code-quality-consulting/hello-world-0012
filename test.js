/*jslint
    node
*/

const assert = require("assert");

function makeGreeting(name, language) {
    "use strict";
    if (language === "Spanish") {
        return "¡Hola mundo!";
    }
    if (name) {
        return "Hello " + name + "!";
    }
    return "Hello world!";
}

assert.strictEqual(makeGreeting(), "Hello world!");
assert.strictEqual(makeGreeting("Zach"), "Hello Zach!");
assert.strictEqual(makeGreeting("", "Spanish"), "¡Hola mundo!");
console.log("Your test has passed!");
