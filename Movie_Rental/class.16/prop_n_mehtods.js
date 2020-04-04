// Object key/value pair's have different names than variables and functions
// ... properties and methods

const object = {

    name: `Chris`, // Object Property

    age: 21, // Object Property

    // Object Method
    sayName() {

        console.log(this.name);

    }

}

object.sayName();