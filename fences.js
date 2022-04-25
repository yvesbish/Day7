var lines = 9;

for ( var i = 0; i<lines; i++){
for (var j = 0; j < i+1; j++){ 
  if (( i % 2 == 0 && j % 2==0) || ( i % 2 == 1 && j % 2 ==1 )){
   document.write("0");
  }
  else {
    document.write("#");
  }
}
  document.write("<br/>");
}
