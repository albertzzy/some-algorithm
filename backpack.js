// 0-1背包问题
// 输入两个整数n和sum，从数列1，2，3.......n 中随意取几个数，使其和等于sum

var result = [];

function sumOfNum(n,sum){
	if(n<=0||sum<=0){
		return;
	}

	if(n===sum){
		// return result;
		// result.push(n);
		console.log(result);
		// console.log('+++++');
		// return result;
	}

	result.push(n);
	sumOfNum(n-1,sum-n);
	result.pop();
	sumOfNum(n-1,sum);
}