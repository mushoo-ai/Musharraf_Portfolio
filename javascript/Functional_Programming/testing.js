
    class Person {
        sayHello() {
            console.log("Hello");
        }
    }

    class Friend extends Person {
        sayHello() {
            console.log("Hey");
        }
    }

    var result = new Friend();
    result.sayHello();
