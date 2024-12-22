function sortingAlgoBubble(){
    let numList = [];

    let num1 = prompt("Enter 42");
    let num2 = prompt("Enter 25");
    let num3 = prompt("Enter 12");
    let num4 = prompt("Enter 63");
    let num5 = prompt("Enter 48");
    let num6 = prompt("Enter 10");
    let num7 = prompt("Enter 16");
    let num8 = prompt("Enter 5");
    let num9 = prompt("Enter 30");
    let num10 = prompt("Enter 78");

    numList.push(num1, num2, num3, num4, num5, num6, num7, num8, num9, num10);

    function bubbleSort(a){
        let n = a.length;
        for (let i = 0; i < n - 1; i++) {
            for (let b = 0; b < n- i - 1; b++) {
                if (a[b] > a[b+1]){

                    let temp = a[b];
                    a[b] = a[b+1];
                    a[b+1] = temp;
                    alert(a, b);
            }
        }
    }
        return a;
}

let sortedNumList = bubbleSort([...numList]);
alert(sortedNumList)
}