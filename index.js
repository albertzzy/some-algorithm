// 


// 快速排序
function qSort(){
    if (arr.length == 0) {
        return [];
    }
    var left = [];
    var right = [];
    var pivot = arr[0];
    for (var i = 1; i < arr.length; i++) {

        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    return qSort(left).concat(pivot, qSort(right));
}

var a = [];
for (var i = 0; i < 10; ++i) {
    a[i] = Math.floor((Math.random()*100)+1);
}
print(a);
print();
print(qSort(a));






// 二分法查找文本
function binSearch(arr, data) {
    var upperBound = arr.length-1;
    var lowerBound = 0;
    while (lowerBound <= upperBound) {
        var mid = Math.floor((upperBound + lowerBound) / 2);
        if (arr[mid] < data) {
            lowerBound = mid + 1;

        }else if (arr[mid] > data) {
            upperBound = mid - 1;

        }else {
            return mid;
        }
    }
    return -1;
}

function insertionsort(arr) {
    var temp, inner;
        for (var outer = 1; outer <= arr.length-1; ++outer) {
            temp = arr[outer];
            inner = outer;
            while (inner > 0 && (arr[inner-1] >= temp)) {
                arr[inner] = arr[inner-1];
                --inner;
            }
            arr[inner] = temp;
        }
}

var words = read("words.txt").split(" ");
insertionsort(words);
var word = "rhetoric";
var start = new Date().getTime();
var position = binSearch(words, word);
var stop = new Date().getTime();
var elapsed = stop - start;
if (position >= 0) {
    print("单词 " + word + " 被找的位置在：" + position + "。");
    print("二分查找消耗了 " + elapsed + " 毫秒。");
}else {
    print(word + " 这个单词没有出现在这个文件内容中。");
}








// 寻找最长公共子串
function lcs(word1, word2) {
    var max = 0;
    var index = 0;
    var lcsarr = new Array(word1.length + 1);

    for (var i = 0; i <= word1.length + 1; ++i) {
        lcsarr[i] = new Array(word2.length + 1);

        for (var j = 0; j <= word2.length + 1; ++j) {

            lcsarr[i][j] = 0;
        }
    }
    for (var i = 0; i <= word1.length; ++i) {
        for (var j = 0; j <= word2.length; ++j) {
            if (i == 0 || j == 0) {
                lcsarr[i][j] = 0;
            } else {
                if (word1[i - 1] == word2[j - 1]) {
                    lcsarr[i][j] = lcsarr[i - 1][j - 1] + 1;
                } else {
                    lcsarr[i][j] = 0;
                }
            }
            if (max < lcsarr[i][j]) {
                max = lcsarr[i][j];
                index = i;
            }
        }
    }
    var str = "";
    if (max == 0) {
        return "";
    } else {
        for (var i = index - max; i <= max; ++i) {
            str += word2[i];
        }
        return str;
    }
}





// 背包问题
function max(a, b) {
    return (a > b) ? a : b;
}
function knapsack(capacity, size, value, n) {
    if (n == 0 || capacity == 0) {
        return 0;
    }
    if (size[n - 1] > capacity) {
        return knapsack(capacity, size, value, n - 1);
    } else {
        return max(value[n - 1] + knapsack(capacity - size[n - 1], size, value, n - 1),
        knapsack(capacity, size, value, n - 1));
    }
}

var value = [4, 5, 10, 11, 13];
var size = [3, 4, 7, 8, 9];
var capacity = 16;
var n = 5;
print(knapsack(capacity, size, value, n));

// 动态规划解决背包问题
function max(a, b) {
    return (a > b) ? a : b;
}
function dKnapsack(capacity, size, value, n) {
    var K = [];
    for (var i = 0; i <= capacity + 1; i++) {
        K[i] = [];
    }
    for (var i = 0; i <= n; i++) {
        for (var w = 0; w <= capacity; w++) {
            if (i == 0 || w == 0) {
                K[i][w] = 0;

            }else if (size[i - 1] <= w) {
                K[i][w] = max(value[i - 1] + K[i-1][w-size[i-1]],K[i-1][w]);

            }else {

                K[i][w] = K[i - 1][w];
            }

            putstr(K[i][w] + " ");
        }
        print();
    }
    return K[n][capacity];
}

var value = [4, 5, 10, 11, 13];
var size = [3, 4, 7, 8, 9];
var capacity = 16;
var n = 5;
print(dKnapsack(capacity, size, value, n));

