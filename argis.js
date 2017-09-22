function qSort(arr){
    if(!arr.length){
        return [];
    }

    let less = [];
    let greater = [];

    let pivot = arr[0];

    for(let i=0;i<arr.length;i++){
        if(arr[i]>pivot){
            greater.push(arr[i]);
        }else{
            less.push(arr[i]);
        }
    }

    return qSort(less).concat(pivot,qSort(greater));


}


// 归并排序


// 希尔排序


// 冒泡 - 最慢
function bubbleSort(arr){
    if(!arr.length){
        return [];
    }

    let len = arr.length;
    let tmp;

    for(let j=len;j>=2;--j){
        for(let i=0;i<=j-1;i++){
            if(arr[i]>arr[i+1]){
                tmp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = tmp;
            }
        }
    }

    return arr;
}


//选择   - 比冒泡快
function selectSort(arr){
    if(!arr.length){
        return [];
    }
    let len = arr.length;
    let min,tmp;

    for(let j=0;j<=len-2;j++){
        min = j;
        for(let i=j+1;i<=len-1;i++){
            if(arr[i]<arr[j]){
                min = i;
            }
        }
        
        if(j!==min){
            tmp = arr[j];
            arr[j] = arr[min];
            arr[min] = tmp;
        }
    }

    return arr;

}


// 插入  - 三种中最快的
function insertSort(arr){
    if(!arr.length){
        return [];
    }

    let tmp,i;
    let len = arr.length;
    for(let j=1;j<len;j++){
        tmp = arr[j];
        i = j;

        while(i>0 && arr[i-1]>tmp){
            arr[i] = arr[i-1];
            i--;
        }

        arr[i] = tmp;
    }

    return arr;
}


// dfs
function dfs(v){
    this.marked[v] = true;

    for(let w in this.adj[v]){
        if(!this.marked[w]){
            dfs(w)
        }
    }

}

// bfs
function bfs(v){
    let queue = [];

    this.marked[v] = true;
    queue.push(v);

    while(queue.length){
        let s = queue.shift();

        for(let w in this.adj[s]){
            if(!this.marked[w]){
                this.marked[w] = true;
                queue.push(w);
            }
        }

    }
}

// bst
// 中序
function midOrder(node){
    if(!node){
        midOrder(node.left);
        print(node.name);
        midOrder(node.right);
    }

}
// 先序
function preOrder(node) {
    if (!(node == null)) {
        putstr(node.show() + " ");
        preOrder(node.left);
        preOrder(node.right);
    }
}
// 后序
function postOrder(node) {
    if (!(node == null)) {
        preOrder(node.left);
        preOrder(node.right);
        putstr(node.show() + " ");
    }
}

// 霍纳算法 - 更好的散列函数
function betterHash(string,arr){
    const H = 37;
    var total = 0;
    for (var i = 0; i < string.length; ++i) {
        total += H * total + string.charCodeAt(i);
    }

    total = total % arr.length;

    return parseInt(total);
}

// 开链法
// 线性探测法
// 如果数组的大小是待存储数据个数的1.5 倍，那么使用开链法；如果数组的大小是待存储数据的两倍及两倍以上时，那么使用线性探测法。


// 动态规划
// 最长公共子串
// ww - 二维数组
// max - index 为最长子串的起始位置
// max 最大长度
function maxLen(words1,words2){
    var max=0,index;

    for(let i=0;i<words1.length;i++){
        for(let j=0;j<words2.length;j++){
            if(i==0 || j==0){
                ww[i][j] = 0;
            }else{
                if(words1[i-1] === words2[j-1]){
                    ww[i][j] = ww[i-1][j-1] + 1;
                }else{
                    ww[i][j] = 0;
                }
            }

            if(max<ww[i][j]){
                max = ww[i][j];
                index = i;
            }
        
        }
    }
}



// https://lenshen.com/2017/08/25/alibaba/
// http://www.cnblogs.com/tangyuchen/p/5821195.html
// https://www.douban.com/note/407710509/
// https://zhuanlan.zhihu.com/p/25383159


this.msg = msg;
this.shout = function(){
    alert(this.msg);
}
this.waitAndShout = function(){
//隔五秒钟后执行上面的shout方法
    var self = this;

    setTimeout(function() {
        self.shout()
        
    }, 5000);

}

function shit(tmp,data){
    let res;
    let regg = /\{\$(\w+)\}/g;
    let reg = /\{\$(\w+)\}/;

    while((res = regg.exec(tmp))!==null){
        let val = data[res[1]];

        tmp = tmp.replace(reg,val);
    }

    return tmp;

}



//https://segmentfault.com/q/1010000010206642
function foo(x) {
    var tmp = 3;
    return function (y) {
        alert(x + y + (++tmp));
    }
}
var bar = foo(2); // bar 现在是一个闭包
bar(10);


// cricle

function cycleDetector(obj) {
    let hasCircle = false, //用一个变量去标记是否有环
      cache = []; //保存值为对象的属性值
    (function(obj) {
      Object.values(obj).forEach(value => {
        if (Object.prototype.toString.call(value) === "[object Object]" && value !== null) {
          const index = cache.indexOf(value)
          if (index !== -1) { //如果cache中存在这个value，则表示有环
            hasCircle = true
            return
          } else {
            cache.push(value)  //添加到cache数组里
            arguments.callee(value)  //递归遍历这个value
          }
        }
      })
    })(obj)
    return hasCircle
  }