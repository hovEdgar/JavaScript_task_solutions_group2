const { log } = console;

/**
 * Homework 5
 * Task 1
 *
 * Create a function that builds a tree.
 */

const treeNodes = [
    {id: 'root', children: [1, 2]},
    {id: 1, children: [3]},
    {id: 2, children: [4, 5]},
    {id: 3, children: [6]},
    {id: 4, children: [7]},
    {id: 5, children: []},
    {id: 6, children: []},
    {id: 7, children: [8, 9]},
    {id: 8, children: []},
    {id: 9, children: [10]},
    {id: 10, children: []},
]

makeTreeFromNodes = (arr, id = "root") => {
    return arr.reduce((prev, cur) => {
        if (cur.id === id) {
            for (let i = 0; i < cur.children.length; i +=1) {
                prev[cur.children[i]] = makeTreeFromNodes(arr, cur.children[i]);
            }
        }
        return prev;
    }, {})
}

log(makeTreeFromNodes(treeNodes));


/**
 * Homework 5
 * Task 2 (from last homework);
 *
 * Write a JavaScript function to get all possible subsets of given length of the given array.
 * Assume that all elements in the array are unique.
 */

function findSequence(arr =[], k = 0, ind = 0) {
    if (k === 0) { return [[]]; }
    const res = [];
    for (let i = ind; i <= arr.length - k; i ++) {
        const r = findSequence(arr, k-1, i+1);
        r.forEach(a => res.push([arr[i], ...a]));
    }
    return res;
}

console.log(findSequence([1,2,3,4], 3, 0))


/**
 * Homework 5
 * Task 3
 *
 * Create a decorator delay(f, ms) that delays each call of ‘f’ by ‘ms’ milliseconds.
 */

function func(str) {
    return log(`Hi ${str}`);
}

function delay(f, ms) {
    return function (...rest) {
        setTimeout(() => f.call(this, ...rest), ms);
    }
}

const test = delay(func, 4000);
test("everyone there!")


/**
 * Homework 5
 * Task 4
 *
 * Implement Debounce decorator;
 */

function f(a, b) {
    return a ** b;
}

function decorator(wrapper, ms) {
    let active = false;
    function innerFunc(...rest) {
        if (active) {
            return;
        }
        active = true;
        setTimeout(() => active = false, ms);
       return wrapper.apply(this, rest);
    }
    return innerFunc;
}



let a = decorator(f, 1000);

log(a(5, 2)) // Will work, because we called it first time
log(a(10, 20)) // Will not work, because "ms" not passed yet
setTimeout(() => log(a(4, 1)), 1200) // Will work, because we "ms" already passed


