((arr) => {
for(let i=0; i<arr.length; i++)
{
    for(let j=i+1; j<arr.length; j++)
    {
        if(arr[i] === arr[j])
        {
        arr.splice(j,1);
        j--;
        }
    }
}
console.log(arr);
})([1,3,6,1,3,9,1,'a','s','d','a','s']);
