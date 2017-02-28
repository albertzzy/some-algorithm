function StringContain(a,b){
    var hash = 0;
    for (var i = 0; i < a.length; ++i)
    {
        hash |= (1 << (a[i] - 'a'));
    }
    console.log(hash);

    for (var i = 0; i < b.length; ++i)
    {
        if ((hash & (1 << (b[i] - 'a'))) == 0)
        {
            return false;
        }
    }
    return true;
}



var a = 'aaabbccd',b = 'cc',c = 'dd',d='kk';

console.log(StringContain(a,b));
console.log(StringContain(a,d));