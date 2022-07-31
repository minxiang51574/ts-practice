/*
 * @Author: Mx
 * @Date: 2022-07-31 20:59:22
 * @Description: 
 */
// 1 联合类型
let name1: string | number;
console.log(name1!.toString());
name1 = 100
console.log(name1.toFixed(2));
name1 = "ff"
console.log(name1.toLowerCase());

// !表示非空
let element: HTMLElement | null = document.getElementById("#app")
element!.style.color = 'red'


// 2 类型断言

let age: string | number
(age! as number).toString()

// 3 字面量类型
type Direction = 'up' | 'down' | 'left' | 'right';
let direction: Direction = 'up';
