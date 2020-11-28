(function (arr) {
    newarr = arr.map((item) => {
    var arrr = [];
    for(let i=0; i<item.length; i++)
    {
        if(item[i] == " ")
        {
          arrr.push(i+1);
        }
    }
    if(arrr.length === 0)
    {
       newItem = item.split("");
       newItem[0] = newItem[0].toUpperCase();
       return newItem.join("");
    }
    else
    {
        newnewItem = item.split(" ");
        newnewarr = newnewItem.map((items) => {
            newItem = items.split("");
            newItem[0] = newItem[0].toUpperCase();
            return newItem.join("");
        })
        return newnewarr.join(" ");
    }
});

console.log(newarr);

})(["ratan singh deep","ratan","deep"]);
