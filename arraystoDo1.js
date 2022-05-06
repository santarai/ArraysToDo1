// First version - going forwards
function pushToFront(arr, val) {
    // Goal: Put "val" at the beginning of the array "arr", move everything else up one index
    // Need: temp variables for holding values
    var temp1 = arr[0], temp2 = arr[1];
    // Loop for moving values to the right
    for (var i = 0; i < arr.length && temp1 != undefined; i++) {
        arr[i+1] = temp1;
        temp1 = temp2;
        temp2 = arr[i+2];
    }
    arr[0] = val; // Inserts the value at the start of the array
}

// Second version - going backwards
function pushToFrontV2(arr, val) {
    // Loop backwards - moving values to the right
    for (var i = arr.length - 1; i >= 0; i--) {
        arr[i+1] = arr[i];
    }
    arr[0] = val; // Put value in at start of array
}

function popFront(arr) {
    var returnVal = arr[0]; // The value we will return
    // Loop through the array - starting at index 1
    for (var i = 1; i < arr.length; i++) {
        // i = 1: arr[0] = arr[1] -> arr[i-1] = arr[i]
        arr[i-1] = arr[i];
    }
    arr.pop(); // Remove the last value
    return returnVal;
}

function insertAt(arr, val, ind) {
    // Loop backwards - moving values to the right - stopping at the index where we're inserting new value
    for (var i = arr.length - 1; i >= ind; i--) {
        arr[i+1] = arr[i];
    }
    arr[ind] = val; // Put value in at specified index
}

function removeAt(arr, ind) {
    ind = Math.floor(ind); // Rounds the index down
    // If index is out of bounds
    if (ind >= arr.length || ind < 0) {
        return null; // Return an arbitrary value
    }
    var returnVal = arr[ind]; // The value we will return
    // Loop through the array - starting at the index after the one whose value will be removed
    for (var i = ind + 1; i < arr.length; i++) {
        arr[i-1] = arr[i];
    }
    arr.pop(); // Remove the last value
    // arr.length--; // Alternate way to remove last value
    return returnVal;
}

function swapPairs(arr) {
    for (var i = 0; i < arr.length - 1; i += 2) {
        // Swap pairs:
        var temp = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = temp;
    }
}

// First version with nested loops
function removeDupesV1(arr) {
    for (var i = 0; i < arr.length - 1; i++) {
        if (arr[i+1] == arr[i]) { // If the value ahead is a duplicate of the current value at index i
            // Remove that value and move everything afterwards to the left an index
            // Remove the last item in the array
            while (arr[i+1] == arr[i]) {
                removeAt(arr,i+1);
            }
        }
    }
}

/* Changing the length of the array at will - useful for second version of remove duplicates */

// var x1 = [3, 'hello', 10.5];
// console.log(x1.length);
// x1.length += 2;
// console.log(x1);
// console.log(x1[3]);
// x1.length -= 3;
// console.log(x1);
// x1.length++;
// console.log(x1);

// x1[10] = 5;
// console.log(x1)

// More efficient version with only one for loop
function removeDupesV2(arr) {
    if (arr.length <= 1) { // If array is empty or has only one value, no duplicates possible
        return;
    }
    var lastUniqueVal = arr[0];
    var nextUniqueInd = 1; // The index for where the next unique value will be put in the array
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] != lastUniqueVal) {
            lastUniqueVal = arr[i];
            arr[nextUniqueInd] = arr[i];
            nextUniqueInd++;
        }
    }
    arr.length = nextUniqueInd; // Remove the duplicates
}