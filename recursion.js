// 尾递归优化
function tco(f) {
  var value;
  var active = false;
  var accumulated = [];

  return function accumulator() {
    accumulated.push(arguments);


    if (!active) {
      active = true;
      while (accumulated.length) {
//      console.log(accumulated.length);
        var arg = accumulated.shift();
//       console.log('----');
//       console.log(accumulated.length);

        value = f.apply(this, arg);
      }
      active = false;
      return value;
    }
  };
}

var sum = tco(function(x, y) {
  if (y > 0) {
    return sum(x + 1, y - 1)
  }
  else {
    return x
  }
});

sum(1, 5)



// 循环递归
/*void CalcAllPermutation(char* perm, int from, int to)
{
    if (to <= 1)
    {
        return;
    }

    if (from == to)
    {
        for (int i = 0; i <= to; i++)
            cout << perm[i];
        cout << endl;
    }
    else
    {
        for (int j = from; j <= to; j++)
        {
            swap(perm[j], perm[from]);
            CalcAllPermutation(perm, from + 1, to);
            swap(perm[j], perm[from]);
        }
    }
}*/