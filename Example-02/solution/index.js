function Algo(){}

Algo.prototype.reverse = function(str){
  let answer = ''
    for(let i = str.length - 1; i >= 0; i--){
        answer += str[i]
    }
    return answer
}

Algo.prototype.highestNumber = function(arr){
    if(arr.length <= 0){
        return null
    }

    let highest = arr[0]
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > highest){
            highest = arr[i]
        }
    }
    return highest
}

Algo.prototype.prefixAgain = function(str, n){
  const prefix = str.substring(0, n)
  const location = str.substring(n).indexOf(prefix)
  return location >= 0
}
