function printArr() {
	let y = 0;
    let arr = ['a', 'b', 'c', 'd', 'e', 'f'];
    let str = document.getElementById("str").value;
    let count = [];
    let c=0;
	for (let i = 0; i < arr.length; i++) {
        c=0;
        let idx = str.indexOf(arr[i]);
        while (idx != -1) {
            c++;
            idx = str.indexOf(arr[i], idx + 1);
        }
        count.push(c);
    }
    for(let j = 0; j < count.length; j++){
        document.getElementById("output").innerHTML+=arr[j]+" = "+count[j]+"<br>";
    }
}
    