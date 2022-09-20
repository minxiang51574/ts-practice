/*
 * @Author: Mx
 * @Date: 2022-09-20 21:15:18
 * @Description: 
 */
// 接口

// 1.函数接口参数
interface FullName {
    firstName: string,
    lastName: string
}
const fullName = ({ firstName, lastName }: FullName): string => {
    return firstName + lastName
}
// 通过接口约束类型


// 2.函数类型接口
interface IFn {
    (obj: FullName): string
}
const fullName2: IFn = ({ firstName, lastName }) => {
    return firstName + lastName

}

// 3.对象接口
interface Vegtables {
    readonly color: string,
    size: number
}
interface Vegtables {
    age?: number,
    taste: 'sour' | 'sweet'
}
const tomato: Vegtables = {
    color: 'orange',
    size: 10,
    taste: "sour"
}

// 4.任意属性 可索引接口
interface Person {
    name: string,
    [key: string]: any
}
let person1: Person = {
    name: "mx",
    age: 15
}