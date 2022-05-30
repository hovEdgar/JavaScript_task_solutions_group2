/**
 * Homework 6
 *
 * Task 1
 *
 * Get array of node ids from tree (keys).
 * You need to print [ 0, 1, 2, 3, 4, 5, 6 ] Order doesn't matter
 */

const tree = {
    0: {
        1: {
            3: {

            },
            4: {
                6: {

                }
            }
        },
        2: {
            5: {

            }
        }
    }
}

function printNodes(obj,arr = []) {
        for (let key in obj) {
            arr.push(key);
            printNodes(obj[key], arr);
        }
    return arr;
}

console.log(printNodes(tree));

/**
 * Homework 6
 *
 * Task 2
 *
 * Get array of nodes from tree.
 * You need to print
 * [ { id: 0, children: [1, 2] }, { id: 1, children: [ 3, 4 ] }, …….. ]
 * Order doesn't matter.
 */

const objTree = {
    0: {
        1: {
            3: {

            },
            4: {
                6: {

                }
            }
        },
        2: {
            5: {

            }
        }
    }
}

function getArrayFromTree(obj, arr = []) {
        for (let key in obj) {
            arr.push({[key]: Object.keys(obj[key])});
            getArrayFromTree(obj[key], arr);
        }
    return arr;
}

console.log(getArrayFromTree(objTree));


/**
 * Homework 6
 *
 * Task 3
 *
 * Implement binary search.
 * First you need to research binary search WITHOUT the implementation itself.
 */

let arr = [10, 5, 12, -2, 101];

function binarySearchImplement(array, value) {
    let start = 0;
    let end = array.length - 1;
    let index = null;

    let sorted = array.sort((a, b) => a - b);

    while (start <= end) {
        index = Math.round((end - start) / 2) + start;

        if (value === sorted[index]) {
            return `Index of value is: ${index}`;
        }
        if (value < sorted[index]) {
            end = --index;
        } else {
            start = ++index;
        }
    }
    return "Not found";
}


console.log(binarySearchImplement(arr, 2)) // Should return 'Not found'
console.log(binarySearchImplement(arr, -2)) // Should return: 0 => the index of -2


/**
 * Homework 6
 *
 * Task 3
 *
 * Implement binary tree search.
 */

// there is a many ways to do binary tree search
// One example if you want to find some value in nasted objects
// For examle lets take object with many nested object with their values
// function should return true or value if the object contains such value, otherwise false;

const obj = {
    1: {
        name: "Alex",
        age: 20,
        2: {
            arr: [1, 2, 3, "apple"],
            3: {
                sum: 55,
                nested: true,
            },
            4: {
                fruit: "apple",
                5: {
                    result: false,
                    6: {

                    }
                }
            },
            7: {

            }
        },
        8: {
            name: "no name",
            9: {
                10: {
                    entered: "yes",
                    emprty: true,
                }
            }
        }
    }
}

function findValue(obj, value) {
    if (!obj || (typeof obj !== "object" || Array.isArray(obj) ) ) {
        return false;
    } else if ( Object.values(obj).includes(value) ) {
        return true;
    }
    for (let key in obj) {
        const result = findValue(obj[key], value);
        if (result) {
            return result;
        }
    }
    return false;
}

console.log(findValue(obj, "apple")); // should return true
console.log(findValue(obj, 27)); // should return false


/**
 * Homework 6
 *
 * Task 4
 *
 * Create a simple portfolio.
 *
 * Create a simple html file (with css, may be with js too), which will contain:
 * 1. Your name, surname
 * 2. Photo
 * 3. Biography
 * a. Education
 * b. Work experience
 * Design it as you wish. Add extra information as you wish.
 */

// Solution of this task coded in index.htm, index.js and style.css files on the same directory