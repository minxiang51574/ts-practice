/*
 * @Author: Mx
 * @Date: 2022-07-31 21:54:29
 * @Description: 
 */
//1 函数
function sum(a: number, b: number): number {
    return a + b
}
sum(100, 200)

type Sum = (a: number, b: number) => number
let sum2: Sum = (a1, a2) => {
    return a1 + a2
}

// 2可选参数
let sum3 = (a: string, b?: string): string => {
    return a + b
}
sum3("100")

// 3默认参数

let sum4 = (a: string, b: string = 'cc'): string => {
    return a + b
}
sum4("200")

// 4剩余参数
let sum5 = (mn: string, ...args: string[]): string => {
    return mn += args.reduce((prve, cur) => prve += cur, "")
}
sum5("a", "b", "c")
console.log(sum5("111", "a", "b", "c"));

// 5 函数重载
