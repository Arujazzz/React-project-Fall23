// 2667. Create Hello World Function
// var createHelloWorld = function() {
//     return function(...args) {
//         return "Hello World";
        
//     }
// };



// 2620. Counter
// var createCounter = function(n) {
//     return function() {
//             return n++;
        
//     };
// };




// 2704. To Be Or Not To Be

// var expect = function(val) {
//     return {
//     toBe: (otherVal) => {
//             if (val !== otherVal) {
//                 throw new Error("Not Equal");
//             } else {
//                 return true;
//             }
//         },
//     notToBe:(otherVal)=>{
//         if(otherVal===val){ 
//          throw new Error("Equal");
//           }
//         else{
//          return true;   
//         }
//     },
    
//     }
    
    
// };



// 2665. Counter II
// var createCounter = function (init) {
//     var count = init;
//     return {
//         increment: () => {
//             return ++count;
//         },
//         decrement: () => {
//             return --count;
//         },
//         reset: () => {
//             count = init;
//             return count;
//         },
//     };
// };


// 2635. Apply Transform Over Each Element in Array
// var map = function(arr, fn) {
//     let newArray= []
//     for(let i =0;i<=arr.length-1;i++){
//         newArray.push(fn(arr[i],i));
//     }
//     return newArray;


// };



// 2634. Filter Elements from Array
// var filter = function(arr, fn) {
//     var _array = [];
//     for (var i = 0; i < arr.length; i++) {
//         if (fn(arr[i], i)) _array.push(arr[i]);
//     }
//     return _array;
    
// };



// 2626. Array Reduce Transformation
// var reduce = function (nums, fn, init) {
//     var acc = init;
//     for (var i = 0; i < nums.length; i++) {
//         acc = fn(acc, nums[i]);
//     }
//     return acc;
// };




// 2629. Function Composition
// var compose = function(functions) {
// 	return function(x) {
//  for (var i = functions.length - 1; i >= 0; i--) {
//             x = functions[i](x);
//         }
//         return x;
        
//     }
// };




// 2703. Return Length of Arguments Passed
// var argumentsLength = function(...args) {
//     return args.length;
//    };



// 2666. Allow One Function Call
// var once = function (fn) {
//     var _called = false;
//     return function (...args) {
//         if (!_called) {
//             _called = true;
//             return fn(...args);
//         }
//         return undefined;
//     };
// };



// 2723. Add Two Promises
// var addTwoPromises = async function(promise1, promise2) {{
//     return (await promise1) + (await promise2);
//   }
      
//   };





// 2621. Sleep
// async function sleep(millis) {
//     return new Promise(resolve => setTimeout(resolve, millis));
 
// }



// 2715. Timeout Cancellation
// var cancellable = function(fn, args, t) {
//     const timeOut = setTimeout(() => {
//        fn(...args)
//    }, t);

//    return function () {
//        clearTimeout(timeOut);
//    }
//    };





// 2725. Interval Cancellation
// var cancellable = function(fn, args, t) {
//     fn(...args)
// let timer = setInterval(() => fn(...args), t)

// let cancelFn = () => clearInterval(timer);
// return cancelFn;
// };


// 2727. Is Object Empty
// var isEmpty = function(obj) {
//     for (var key in obj) {
//          if (obj.hasOwnProperty(key)) {
//              return false;
//          }
//      }
//      return true;
     
//  };




//  2677. Chunk Array
//  var chunk = function(arr, size) {
//     var result = [];
//   for (var i = 0; i < arr.length; i += size) {
//       result.push(arr.slice(i, i + size));
//   }
//   return result;
// };




// 2619. Array Prototype Last
// Array.prototype.last = function() {
//     if(this.length==0){
//         return -1;
//     }
//     else{
//           return this[this.length - 1];
//     }
  
// };



// 2724. Sort By
// var sortBy = function(arr, fn) {
//     return arr.sort(function(a, b) {
//          return fn(a) - fn(b);
//      });
//  };



//  2695. Array Wrapper
//  var ArrayWrapper = function(nums) {
//     this.nums = nums;  
//  };
 
//  ArrayWrapper.prototype.valueOf = function() {
//       let sum = 0;
//      for (let i = 0; i < this.nums.length; i++) {
//          sum += this.nums[i];
//      }
//      return sum;
     
//  }
 
//  ArrayWrapper.prototype.toString = function() {
//       return "[" + this.nums.join(",") + "]";
//  }



//  2726. Calculator with Method Chaining

//  class Calculator {
  
//     /** 
//      * @param {number} value
//      */
//     constructor(value) {
//         this.value = value
//     }
  
//     /** 
//      * @param {number} value
//      * @return {Calculator}
//      */
//     add(value){
//         this.value += value
//           return this;
//     }
  
//     /** 
//      * @param {number} value
//      * @return {Calculator}
//      */
//     subtract(value){
//          this.value -= value
//           return this;
  
//     }
  
//     /** 
//      * @param {number} value
//      * @return {Calculator}
//      */  
//     multiply(value) {
//          this.value *= value
//           return this;
//     }
  
//     /** 
//      * @param {number} value
//      * @return {Calculator}
//      */
//     divide(value) {
//          if(value === 0) {
//               throw new Error("Division by zero is not allowed")
//           }
//           this.value /= value
//           return this;
//     }
    
//     /** 
//      * @param {number} value
//      * @return {Calculator}
//      */
//     power(value) {
//         this.value = Math.pow(this.value, value)
//           return this;
//     }
      
//     /** 
//      * @return {number}
//      */
//     getResult() {
//      return this.value;
//     }
//   }