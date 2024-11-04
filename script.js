const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  // Write your code here
	let result = [];
	let subArray = [];
	let sum = 0;

	arr.forEach(num =>{
		if(sum + num <= n){
			subArray.push(num);
			sum = sum + num;
		}else{
			result.push(subArray);
			subArray = [num];
			sum = num;
		}
	})

	if(subArray.length > 0){
		result.push(subArray);
	}
	return result;
};

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
