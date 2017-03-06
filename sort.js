# 插入排序
	```javascript
		function insertSort(){
			for(var i= 1; i<n; i++){  
		        if(a[i] < a[i-1]){               
		            var j= i-1;   
		            var x = a[i];        
		            a[i] = a[i-1];           
		            while(x < a[j]){  
		                a[j+1] = a[j];  
		                j--;         
		            }  
		            a[j+1] = x;      
		        }  
		    }  
		}

	```

# 选择排序
	
	## 简单选择排序

		```javascript
			function selectSort(arr, n){  
			    var key, tmp;  
			    for(var i = 0; i< n; ++i) { 
			    	key = i;
				    for(var j=i+1 ;j< n; ++j) {  
				        if(a[k] > a[j]) k = j;  
				    }  

			        key = SelectMinKey(a, n,i);           
			        if(key != i){  
			            tmp = a[i];  a[i] = a[key]; a[key] = tmp; 
			        }  
			    }  
			}  

		```



	## 堆排序	




# 交换排序

	## 冒泡排序

	```javascript
		function bubbleSort(arr){
			var len = arr.length;
			for(var i=0;i<len-2;i++){
				for(var j=len-1;j>i;j--){

					if(arr[j]<arr[j-1]){
						swap(arr[j],arr[j-1]);
					}

				}
			}
		}



		function bubbleSort2(){
			var len = arr.length;
			for(var i=0;i<len-2;i++){
				for(var j=i;j<len-1;j++){

					if(arr[j]<arr[i]){
						swap(arr[j],arr[i]);
					}

				}
			}
		}


	```



	## 快速排序

	```javascript
		function quickSort(arr){
			var i=0;j=arr.length-1;

			while(i<j){
				while(i<j&&arr[i]<arr[j])
					i++;
				if(i<j && arr[i]>arr[j]){
					swap(arr[i],arr[j])
				}

				while(i<j&&arr[i]<arr[j])
					j--;
				if(i<j && arr[i]>arr[j]){
					swap(arr[i],arr[j])
				}
			}

		}

	```