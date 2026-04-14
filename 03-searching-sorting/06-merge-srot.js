// merge sort 

function mergeSort(arr){
    if(arr.length <= 1) return arr;
    let mid  = Math.floor(arr.length/ 2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));  

    return merge(left, right);
}

function merge (left, right){
    let l = 0;
    let r = 0;
    let res = [];
    while(l < left.length && r < right.length){
        if(left[l] > right[r]){
            res.push(right[r])
            r++;
        } else {
            res.push(left[l]);
            l++;
        }
    }
    return [...res, ...left.slice(l), ...right.slice(r)];
}

console.log(mergeSort([1,2,4,1,-10,20,40]))