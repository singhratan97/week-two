((arr1,arr2) => {
arr = [...arr1,...arr2];
arr.sort((a,b) => a-b);
console.log(arr);

//Median of two sorted array of same size when its EVEN
if(arr.length%2 === 0)
{
    mid1 = (arr.length/2)-1;
    mid2 = arr.length/2;
    console.log((arr[mid1]+arr[mid2])/2);
}
//Median of two sorted array of same size when its ODD
else
{
    mid = parseInt(arr.length/2);
    console.log(arr[mid]);
}
})([1,2,3],[8,7,6]);
