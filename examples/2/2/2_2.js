/**
 *  RxJS in Action
 *  Listing 2.2
 *  @author Paul Daniels
 *  @author Luis Atencio
 */
 // Custom iterator that buffers a set of bufferSize elements
function BufferIterator(arr, bufferSize = 2) {              // Assigns a default buffer size of 2
    this[Symbol.iterator] = function () {   // Overrides the provided array’s iterator mechanism. Symbol.iterator represents the array’s iterator function.
        let nextIndex = 0;

        return {
            next: () => {                                       //The next() function is part of the Iterator interface and marks the next element in the iteration.
              if(nextIndex >= arr.length) {
                return {done: true};                                    //Returns an object with a done = true property, which causes the iteration mechanism to stop
              }
              else {
                let buffer = new Array(bufferSize);
                for(let i = 0; i < bufferSize; i++) {           //Creates a temporary buffer array to group contiguous elements
                  buffer[i] = (arr[nextIndex++]);
                }
                return {value: buffer, done: false};                   // Returns the buffered items and a status of done = false, which indicates to the iteration mechanism to continue
              }
            }
        }
    };
}

//--------------------------------------------------//
//                Usage                             //
//--------------------------------------------------//
const arr = [1, 2, 3, 4, 5, 6];

// Buffer a set of 2 elements on each iteration
for(let i of new BufferIterator(arr, 2)) {
    console.log(i);
} //-> [1, 2] [3, 4] [5, 6]

// Buffer a set of 3 elements on each iteration
for(let i of new BufferIterator(arr, 3)) {
    console.log(i);
} //-> [1, 2, 3] [4, 5, 6]
