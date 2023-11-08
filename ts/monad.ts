class Maybe {
    value : any;
    constructor(value){
        this.value = value;
    }
    bind = function (func) {
        const value = func(this.value)
        // Add value checks here
        return new Maybe(value)
    }
}

// How to use
let firstFriedGender = new Maybe("Otto")
    .bind(fetch("http://"))
    .bind(user => user.frieds)
    .bind(firends => firends.first)
    .bind(friend => friend.gender)