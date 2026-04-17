//_propName defime private property in js --
//in old 
const User = {
    _email: 'h@hc.com',
    _password: "abc",


    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}

//object.create is used to create a new object with the specified prototype object and properties. 
//It allows you to create an object that inherits from another object, which can be useful for creating 
//objects that share common behavior or properties.
const tea = Object.create(User)
console.log(tea.email);


//ecmaScript programming property 2022  proposal --
//sites to know about more --
//1. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create 