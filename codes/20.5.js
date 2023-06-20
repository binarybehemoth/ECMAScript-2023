function escapeRegex(string) {
    return string.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
}
console.log("C A++".match(new RegExp(escapeRegex("A+"))));
// ["A+", index: 2, input: "C A++", groups: undefined]
