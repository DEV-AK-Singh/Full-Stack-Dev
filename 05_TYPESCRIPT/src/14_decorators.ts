function classLogger(constructor: Function) { 
    console.log(constructor.name);
}

function getKeyDetails(target: any, key: any) { 
    console.log(key);
}


@classLogger
class CustomMathClass {
    @getKeyDetails
    a: number;
    @getKeyDetails
    b: number;
    constructor(a: number, b: number) {
        this.a = a;
        this.b = b;
    }
    add(a: number, b: number): number {
        return a + b;
    }
}

function updatedAdditionBy10 (target: any, key: string, descriptor: PropertyDescriptor) { 
    descriptor.value = function sum (x: number, y: number) { 
        return x + y + 10;    
    }
}

class MathClass {
    a: number;
    b: number;
    constructor(a: number, b: number) {
        this.a = a;
        this.b = b;
    }
    @updatedAdditionBy10
    add(a: number, b: number): number {
        return a + b;
    }
}

const mathClass = new MathClass(1, 2);
console.log(mathClass.add(1, 2));