function fool(n){
	if(n==1||n==2){
		return n;
	}
	if(n>2){
		fool(n-1)+fool(n-2)
	}
}
