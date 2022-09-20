/*
 * @Author: Mx
 * @Date: 2022-09-20 21:51:34
 * @Description: 
 */
// 6 泛型

// 1单个泛型
const gerArray = <T>(times: number, val: T): T[] => {
    let reselt: T[] = [];
    for (let i = 0; i < times; i++) {
        reselt.push(val);
    }
    return reselt;
}
gerArray(4, 2)

// 2 类型别名
type TArray = <T, K>(tuple: [T, K]) => [K, T]
const getArray: TArray = <T, K>(tuple: [T, K]): [K, T] => {
    return [tuple[1], tuple[0]]
}

// 接口 能使用接口就尽量使用interface
interface TArray2 {
    <T, K>(tuple: [T, K]): [K, T]
}
const getArray2: TArray2 = <T, K>(tuple: [T, K]): [K, T] => {
    return [tuple[1], tuple[0]]

}

// 3 泛型接口
interface ISum<T> {
    <U>(a: T, b: T): U
}

let sum12: ISum<number> = (a: number, b: number) => {
    return 3 as any
}
