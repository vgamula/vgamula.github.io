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

function eratosthenes(m, n) {
	var array = [false, true];
	for (var i=2; i <= n; i++) {
		array.push(true);
	}
	for (var i = 2; i*i < n; i++) {
		if (array[i]) {
			for (var j = i*i; j <= n; j+=i) {
				array[j] = false;
			};
		}
	};
	var arr = [];
	for (var i = m; i < n; i++) {
		if (array[i]) {
			arr.push(i);
		}
	};
	return arr;
}

function getSumm(array) {
	var s = 0;
	for (var i = 0; i < array.length; i++) {
		s += parseInt(array[i]);
	};
	return s;
}
