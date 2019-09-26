module.exports = function check(str, bracketsConfig) {

	let bracket = 0;
	
	let arr = [];
	let result = false;

	let i = 0;

	while(i < str.length){
		
		let action = 0;

		for (let j = 0; j < bracketsConfig.length; j++) {
			
			if (str[i] == bracketsConfig[j][0] && (str[i] != arr[arr.length-1])) {
				++bracket;
				arr.push(bracketsConfig[j][1]);
				action = 1;
			}

			if ((str[i] == bracketsConfig[j][1]) && (str[i] == arr[arr.length-1]) && (action != 1)){
				--bracket;
				arr.splice(arr.length-1, 1);
				action = 1;
			}
		}

		if (action == 0) {	
			result = false;
			break;
		} else result = true;

		i++;
	}
	
	return (bracket == 0 && result == true);
}
