// selection sort 

// arr = [1,2,4,1, -10, 20, 40];

function selectionSort(arr){
    let n = arr.length;
    for(let i = 0; i<n; i++){
        let min = i;
        for(let j = i+1;j < n; j++){
            if(arr[min] > arr[j]){
                min = j;
            }
        }
        if(min != i){
            let temp = arr[i];
            arr[i] = arr[min];
            arr[min] = temp
        }
    }
    return arr;
}

console.log(selectionSort([1,2,4,1,-10,20,40]))