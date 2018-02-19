let sampleArray1 = [[[6],[8, 9,7]],[4,[[5,3, "ssss"]]]];
let sampleArray2 = [[[0],[8, 9,7]],[4,[[5,3, null]]]];
let sampleArray3 = [];
let sampleArray4 = null;
let sampleArray5 = [[[3],[8, 9,7]],[4,[[4,4,1, 2]]]];


convertToFlatten = (sampleArray)=>{
  if(!sampleArray || !(sampleArray instanceof Array)) {return []};
  let flattenResult = [];
  const clone = sampleArray.slice();
  processArray = (arrayToWork) =>{
      arrayToWork instanceof Array && arrayToWork.map(n=>{
      if(n instanceof Array) { 
        processArray(n); 
      } else if (typeof n === 'number'){
          flattenResult.push(n); 
      }else{
        console.log('This is a not integer value on the array:');
        console.log(n);
      }   
    })
  };
  processArray(clone);
  return flattenResult;
}

// Demo test samples.
console.log('Result flaten integers: ', convertToFlatten(sampleArray1));
console.log('Result flaten integers: ', convertToFlatten(sampleArray2));
console.log('Result flaten integers: ', convertToFlatten(sampleArray3));
console.log('Result flaten integers: ', convertToFlatten(sampleArray4));
console.log('Result flaten integers: ', convertToFlatten(sampleArray5));