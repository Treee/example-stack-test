const jasmine = require("jasmine");
const Stack = require("../src/stack");

describe("A Stack", () => {
    let myStack;
    beforeEach(() => {
        myStack = new Stack();
    });
    it("knows when it is empty", () => {
        expect(myStack.isEmpty()).toBe(true);
    });
    it("can push an item on to the stack", () => {
        myStack.push(3);
        expect(myStack.isEmpty()).toBe(false);
    });
    it("can pop the most recent item off the stack", () => {
        myStack.push(3);
        myStack.push(2);
        myStack.push(7);
        expect(myStack.pop()).toBe(7);
    });
    it("can pop the most recent item off the stack with a different set of values", () => {
        myStack.push(5);
        myStack.push(2);
        myStack.push(8);
        expect(myStack.pop()).toBe(8);
    });
    it("can remove all items from the stack", () => {
        myStack.push(4);
        myStack.push(3);
        myStack.push(2);
        myStack.push(1);
        expect(myStack.isEmpty()).toBe(false);
        myStack.clear();
        expect(myStack.isEmpty()).toBe(true);
        expect(myStack.pop()).toBe(undefined);
    });
    it("knows how many items it holds", () => {
        myStack.push(1);
        myStack.push(2);
        myStack.push(3);
        myStack.push(4);
        expect(myStack.size()).toBe(4);
    });
    it("decreases count when poping after pushing", () => {
        myStack.push(1);
        expect(myStack.size()).toBe(1);
        myStack.push(2);
        expect(myStack.size()).toBe(2);
        myStack.push(1);
        expect(myStack.size()).toBe(3);
        myStack.pop();
        expect(myStack.size()).toBe(2);
    });
    it("can pop multiple values off the stack", () => {
        myStack.push(1);
        myStack.push(2);
        myStack.push(3);

        expect(myStack.pop()).toBe(3);
        expect(myStack.pop()).toBe(2);
        expect(myStack.pop()).toBe(1);
    });
    it("can tell if a value is contained inside", () => {
        myStack.push(1);
        myStack.push(2);
        myStack.push(3);
        expect(myStack.contains(2)).toBe(true);
    });
    it("can tell if a value is not contained inside", () => {
        myStack.push(1);
        myStack.push(2);
        myStack.push(3);
        expect(myStack.contains(9999)).toBe(false);
    });
});