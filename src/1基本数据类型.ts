/*
 * @Author: Mx
 * @Date: 2022-07-31 20:59:22
 * @Description: 
 */

// 1.布尔 数字 字符串
let bool: boolean = false;
let num: number = 10;
let str: string = 'hello zf';

// 2.元组类型
// 限制长度个数 类型 一一对应
let tuple: [string, number, boolean] = ['hello zf', 1, false]
tuple.push(false)

// 3.数组
let arr1: number[] = [1, 2, 3, 4, 5]
let arr2: string[] = ['1', '2', '3', '4', '5']
let arr3: (number | string)[] = [1, '2', '3', '4', '5']
let arr4: Array<number | string> = [1, 2, 3, 4, 5, '6']


// 4.枚举
enum USER {
    USER = 'user',
    ADMIN = 1,
    MANAGER,
}
// 5 any 不进行类型校验

// 6 null undefined

// 7 void 只能接受null undefined 一般用于函数的返回值

// 8 任何类型的子类型 never代表不会出现的值 不能把any赋给其他类型

// 9 symbol类型 独一无二
const s1 = Symbol('key')
const s2 = Symbol('key')
// console.log(s1 === s2); false

// 10 BigInt
const num1 = Number.MAX_SAFE_INTEGER + 1
const num2 = Number.MAX_SAFE_INTEGER + 2
// console.log(num1 == num2);

// 11 Obeject