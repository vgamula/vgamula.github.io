function makeInvert(value) {
	var array = [];
	var invertArr = [];
	var isCorrect = true;
	for (var i = 0; i < value.length; i++) {
		array.push(parseInt(value[i]));
	};
	for (var i = 0; i < array.length; i++) {
		if (array.indexOf(array[i]) != array.lastIndexOf(array[i])) {
			return "Не повинно бути повторень!";
		}
	};
	console.log(array);	
	var i = 0;
	while (array.length != 0) {
		var index = array.indexOf(i);
		if (index != -1) {
			invertArr.push(index);
			array.splice(index, 1);
		} 
		i++;
	}
	return invertArr.join('');	
}

function makeSource(value) {
	var array = [];
	for (var i = value.length-1; i >=0 ; i--) {
		if (array.length == 0) {
			array.push(i+1);
			continue;
		}
		var tmp = parseInt(value[i]);
		if (tmp >= array.length) {
			array.push(i+1);
		} else {
			array.splice(tmp, 0, i+1);
		}
	};
	return array.join("");
}