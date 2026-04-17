class User{
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
    //whenever i creatte new user, automatically id created


    //restricted to class only , we cannot access it outside the class --
    static createId(){
        return `123`;
    }
}

const suraj = new User("suraj");
//console.log(suraj.createId());


class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "i@phone.com")
console.log(iphone.createId());