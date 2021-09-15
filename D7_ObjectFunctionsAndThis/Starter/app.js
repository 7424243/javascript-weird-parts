function a() {
    console.log(this); //global object
}

let b = function() {
    console.log(this); //global object
}

a(); //simply invoking a function, means the 'this' object will be the global object
b();

let c = {
    name: 'the c object',
    log: function() {
        let self = this; //equal to by reference

        self.name = 'Updated c object'; //changes the name value of this object 
        console.log(self);

        let setname = function(newname) {
            //console.log(this); //global object
            //this.name = newname; //added this on the global object!
            self.name = newname; //updates the correct object instead of the global object because of the variable we set
        }
        setname('updated again c object');
        console.log(self);
    }
}

c.log();// in this case, the 'this' in inside the method within an object so 'this' points to the object it's sitting inside of: {name: 'the c object', log: ƒ}