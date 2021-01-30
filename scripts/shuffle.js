const array = ["Davi", "Halisson", "Victor", "Guilherme"]

const arrShuffle = function(arr){
    let newPos, temp
    for (let i = arr.length -1; i > 0  ; i--) {
        newPos = Math.floor(Math.random() * (i + 1))
        temp = arr[i]
        arr[i] = arr[newPos] 
        arr[newPos] = temp
        return arr;
    }
}

const newArray = arrShuffle(array)

console.log(newArray);
