function sum(...arr) {
  // Start coding here !
  let sumAll=0;
  for(let i=0;i<arr.length;i++){
    sumAll+=arr[i];
  }
  return sumAll;
}

let result1 = sum(1, 2, 3, 4, 5, 6, 7, 8);
let result2 = sum(1, 2, 3, 4);

console.log(`Result ${result1}`);
console.log(`Result ${result2}`);
