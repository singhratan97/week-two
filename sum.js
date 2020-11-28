(function (arr){
total = arr.reduce((function(sum,item){ return sum+item}),0);
console.log(total);
})([1,2,3,4,5]);
