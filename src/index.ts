/*
 * @Author: Mx
 * @Date: 2022-07-31 21:54:29
 * @Description: 
 */
// 类
class pointer {
    x!: number; // 实例上的属性必须先声明
    y!: number;
    constructor(x: number, y?: number, ...args: number[]) {
        this.x = x;
        this.y = y as number;
    }
}
let xy = new pointer(100, 200)
// 实例上的属性需要先声明在使用，构造函数中的参数可以使用可选参数和剩余参数

// 1 public 修饰符 谁都可以访问到
// class Animal {
//     public name: string;
//     public age: number;
//     constructor(name: string, age: number) {
//         this.name = name;
//         this.age = age;
//     }
// }
class Animal {
    constructor(public name: string, public age: number) {
        this.name = name;
        this.age = age;
    }
}
class Cat extends Animal {
    constructor(name: string, age: number) {
        super(name, age);
        console.log(this.name, this.age);
    }
}
let p = new Cat('tmh', 18);

// 2 protected 修饰符 （自己和子类可以访问到）
class Animal2 {
    constructor(protected name: string, protected age: number) {
        this.name = name;
        this.age = age;
    }
}
class Cat2 extends Animal2 {
    constructor(name: string, age: number) {
        super(name, age);
        console.log(this.name, this.age); // 可以访问
    }
}
let p2 = new Cat2('mhd', 20)
// console.log(p2.name, p2.age); // 属性“name”受保护，只能在类“Animal2”及其子类中访问

