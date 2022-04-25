function minMaxAvg(arr) {
  var min = arr[0];
  var Max = arr[0];
  var Avg;
  var sum = 0;
  
  for (var i =0; i< arr.length; i++){
    sum += arr[i];
  }

  for ( var i=0; i< arr.length; i++){
    if (arr[i] < min) {
      min = arr[i];
    }
    if (arr[i] > Max) {
      Max = arr[i];
    }
  }
  
  Avg = sum/arr.length;
return [min, Max, Avg];
  
  }
  console.log(minMaxAvg([ 20,10,30,40,15]));
console.log(minMaxAvg([3,1,2,4,2]));
