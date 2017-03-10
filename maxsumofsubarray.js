function fool(){
	var maxSum = a[0];
	var curSum = 0;
	for(var i=1;i<n;i++){
		curSum += a[i];
		if(curSum>curSum-a[i]){
			maxSum = curSum;
		}else{
			maxSum = a[i];
		}
	}
	return maxSum;
}