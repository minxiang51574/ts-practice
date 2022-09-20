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

// 3 private修饰符（除了自己都访问不到）
class Animal3 {
    constructor(private name: string, private age: number) {
        this.name = name;
        this.age = age;
    }
    changeName(name: string) {
        this.name = name; // 仅读属性只能在constructor中被赋值
    }
}

class Cat3 extends Animal3 {
    constructor(name: string, age: number) {
        super(name, age);
    }
}
let p3 = new Cat3('mx', 20);
p3.changeName('22')


// 静态属性和方法

class Animal4 {
    static name = '动物'; //静态属性
    static getName() {
        return '动物类';
    }
    private _name: string = 'tom4'
    get name() { //属性访问器
        return this._name;

    }
    set name(name: string) {
        this._name = name;
    }

}
let Animalmx = new Animal4();

// 类的装饰器
// 1装饰类
function addSay(target: any) {
    target.prototype.say = function () {
        console.log('hello');
    }
}

@addSay
class Person2 {
    say!: Function
}
let person = new Person2();
person.say()