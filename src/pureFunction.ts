let result = 1000

export function impureFunction(){
    result = result + 1
    console.log(result)
    return result
}

export function pureFunction(a: number, b:number){
    const sum = a+b
    console.log(sum)
    return sum
}