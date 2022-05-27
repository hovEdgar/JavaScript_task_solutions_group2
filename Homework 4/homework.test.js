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

function makeTreeNodes(arr, parent = null) {
    return arr.reduce((prev, cur) => {
        if (cur.parent === parent) {
            prev[cur.id] = makeTreeNodes(arr, cur.id);
        }
        return prev;
    }, {})
}

console.log(makeTreeNodes(arr));



/**
 * Task 2
 *
 * Write a JavaScript function to get all possible subsets of given length of the given array.
 * Assume that all elements in the array are unique.
 */


 // this task moved to the next homework;

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

