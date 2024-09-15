display();

function display() {
    function fibs(num) {
        let arr = [0,1];
        let i = 0 , j = 1;
        while (arr.length < num) {
            let sum = arr[i] + arr[j];
            arr.push(sum);
            i += 1;
            j += 1;
        };
        return arr;
    };


    let arr = [0,1];
    function fibsRec(num, i = 0, j = 1) {
        if (arr.length === num) {
            return arr
        } else {
            let sum = arr[i] + arr[j];
            arr.push(sum);
            return fibsRec(num, i += 1, j += 1);
        };
    };

    const mergeSort = function (arr) {
        if (arr.length < 2) {
            return arr;
        }

        let middle = Math.floor(arr.length / 2);
        let leftSide = arr.slice(0,middle);
        let rightSide = arr.slice(middle);
        let result = merge(mergeSort(leftSide),mergeSort(rightSide));
        return result;
    }

    const merge = function (left,right) {
        let newArr = [];
        while (left.length && right.length) {
            if (left[0] < right[0]) {
                newArr.push(left.shift());
            } else {
                newArr.push(right.shift());
            };
        };

        while (left.length) {
            newArr.push(left.shift());
        };

        while (right.length) {
            newArr.push(right.shift());
        };

        return newArr;
    };


    console.log(mergeSort([105,79,100,110]));
};
