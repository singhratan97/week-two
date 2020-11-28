(function (arr){

    var arr1 = arr.filter((item) => {
        let count = 0;
        for (let i=1; i<=item; i++)
        {
            if(item%i==0)
            count++;
        }
        if(count == 2)
        return item;
    })
    console.log(arr1);
})([1,2,3,4,5,9,13,71]);
