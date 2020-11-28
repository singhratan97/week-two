(function(arr){
var newarr = arr.filter((item) => {
var revname,temp;
arr = item.split("");

for (let i=0; i<parseInt(arr.length/2); i++)
{
   temp = arr[i];
   arr[i] = arr[arr.length - 1 -i];
   arr[arr.length - 1 -i] = temp;
}

revname = arr.join("");
if(revname === item)
return revname;
})
console.log(newarr);
})(["array" , "ratar" , "man" , "malayalam", "rarrar"]);
