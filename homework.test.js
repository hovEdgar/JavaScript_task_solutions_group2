/**
 * Task 1
 *
 * Create a function that builds a tree like object given an array with object which contains parent and id properties.
 */

const arr = [
    {parent: null, id: 0},
    {parent: 0, id: 1},
    {parent: 0, id: 2},
    {parent: 1, id: 3},
    {parent: 1, id: 4},
    {parent: 2, id: 5},
    {parent: 4, id: 6},
];

let obj = arr.reduce((p, c) => {
    if(c.parent === null) {
        p[c.id] = {};
    } else if (p[c.parent]) {
        p[c.parent][c.id] = {};
    }
    return p;
}, {});

let obj2 = arr.reduce((p, c) => {
    if(c.parent === null) {
        p[c.id] = {};
    } else if (p[c.parent]) {
        p[c.parent][c.id] = {};
    }
    return obj["0"];
}, {});

console.log(obj2);



/**
 * Task 2
 *
 * Write a JavaScript function to get all possible subsets of given length of the given array.
 * Assume that all elements in the array are unique.
 */


describe("possible subsets from array", () => {
    test("tests for task N2", () => {

        function possibleSubsets(array, n) {

                // couldn't write this one;

        }

        expect(possibleSubsets([1, 2, 3, 4], 2))
            .toEqual([ [1, 2],  [1, 3],  [1, 4],  [2, 3],  [2, 4],  [3, 4] ]);
        expect(possibleSubsets([1, 2, 3, 4], 3))
            .toEqual([ [1, 2, 3],  [1, 2, 4],  [1, 3, 4],  [2, 3, 4] ]);
        expect(possibleSubsets([1, 2, 3, 4, 5], 3))
            .toEqual([
                [1,2,3],  [1,2,4],  [1,2,5],
                [1,3,4],  [1,3,5], [1,4,5],
                [2,3,4], [2,3,5], [2,4,5],
                [3,4,5]
            ]);
    });
});


/**
 * Task 3
 *
 * Write a recursive function to determine whether all digits of the number are odd or not.
 */
describe("odd numbers without recursion", () => {
    test("tests for task N3", () => {

        function oddDigits(num) {
            return String(num).split("").every(elem => +elem % 2 !== 0 );
        }

        expect(oddDigits(7791)).toBeTruthy();
        expect(oddDigits(4211133)).toBeFalsy();
        expect(oddDigits(5)).toBeTruthy();
    })

    test("tests func with recursion for task N3", () => {

        function oddDigitsRec(num) {
           if (String(num)[0] % 2 == 0) {
               return false;
           }
           if (String(num).length === 1) {
               return true;
           } else {
               let arg = String(num).slice(1);
               return oddDigitsRec(+arg);
           }
        }

        expect(oddDigitsRec(771)).toBeTruthy();
        expect(oddDigitsRec(4211)).toBeFalsy();
        expect(oddDigitsRec(1)).toBeTruthy();
    });
});

/**
 * Task 4
 *
 * Given an array of numbers. Write a recursive function to find its minimal positive element.
 * (if such element does not exist, return -1)․
 */

describe("find smallest positive number", () => {
    test("tests for task N4", () => {

        function smallestPositiveNum(array) {
            if (array.length === 0) {
                return -1;
            }
            let sorted = [...array].sort((a, b) => a - b);
            let firstDigit = sorted.shift();
            return firstDigit >= 0 ? firstDigit : smallestPositiveNum(sorted);
        }

        expect(smallestPositiveNum([56, -9, 87, -23, 0, -105, 55, 1])).toEqual(0);
        expect(smallestPositiveNum([45, -9, 15, 5, -78])).toEqual(5);
        expect(smallestPositiveNum([-5, -9, -111, -1000, -7])).toEqual(-1);
    });
});

/**
 * Task N5
 *
 * Writ the decorator which will run only once during given  "ms" as argument
 */

function first(a, b) {
    return a + b;
}

function decorator(wrapper, ms) {
    let active = true;
    function innerFunc(...rest) {
        if (active) {
            active = false;
            setTimeout(() => active = true, ms);
            return wrapper.apply(this, rest);
        }
    }
    return innerFunc;
}

let args = decorator(first, 5000);

args(20, 7);