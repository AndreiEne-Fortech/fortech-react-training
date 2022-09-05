let result = 1000

export function impureFunction(){
    result = result + 1
    console.log(result)
    return result
}

export function pureFunction(a,b){
    const sum = a+b
    console.log(sum)
    return sum
}