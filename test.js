/*jslint
    node
*/

const assert = require("assert");

function makeGreeting(name, language) {
    "use strict";
    if (language === "Spanish") {
        if (name) {
            return "¡Hola " + name + "!";
        }
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
assert.strictEqual(makeGreeting("Ben", "Spanish"), "¡Hola Ben!");
console.log("Your test has passed!");
