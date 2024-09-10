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
};
