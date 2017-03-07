// 寻找和为定值的两个数
// 先排序，然后两头夹逼

function fool(arr){

	while(end<begin){


		if(arr[begin]+arr[end]===sum){
			break;
		}else{

			if(arr[begin]+arr[end]<sum){
				begin++;
			}else{
				end--;
			}

		}

	}

}
