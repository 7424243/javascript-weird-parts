(function(global, $) {

    //returns a new object
    const Greetr = (firstName, lastName, language) => {
        return new Greetr.init(firstName, lastName, language);
    }

    //not exposed, supported languages within library
    const supportedLangs = ['en','es'];

    //not exposed, supported greetings within library
    const greetings = {
        en: 'Hello',
        es: 'Hola'
    };

    //not exposed, supported greetings within library
    const formalGreetings = {
        en: 'Greetings',
        es: 'Saludos'
    };

    //not exposed, log messages within library
    const logMessages = {
        en: 'Logged in',
        es: 'Inicio sesion'
    }

    //exposed prototype for the Greetr object
    Greetr.prototype = {
        //return full name
        fullName: function() {
            return `${this.firstName} ${this.lastName}`
        },
        //validate that the language exists in your library
        validateLang: function() {
            if(supportedLangs.indexOf(this.language) === -1) {
                throw 'Invalid Language';
            }
        },
        //correct greeting depending on the lang
        greeting: function() {
            return `${greetings[this.language]} ${this.firstName}!`;
        },
        //formal greeting depending on the lang
        formalGreeting: () => {
            return `${formalGreetings[this.language]}, ${this.fullName()}`
        },
        //formal or informal greeting depending on parameter.
        greet: function(formal) {
            let msg;
            //if undefined or null it will be coerced to 'false
            if (formal) {
                msg = this.formalGreeting();
            } else {
                msg = this.greeting();
            }
            if (console) {
                console.log(msg)
            }
            //'this' refers to the calling object at execution time 
            //makes the method chainable
            return this;
        },
        //if console is available, log message
        log: function() {
            if (console) {
                console.log(`${logMessages[this.language]}: ${this.fullName()}`);
            }
            return this;
        },
        //set a new language and validate that it's part of the languages within the library
        setLang: function(newLang) {
            this.language = newLang;
            this.validateLang();
            return this;
        },
        HTMLGreeting: function(selector, formal) {
            if (!$) {
                throw Error;
            }
            if (!selector) {
                throw 'Missing jQuery selector';
            }
            let msg;
            if (formal) {
                msg = this.formalGreeting();
            } else {
                msg = this.greeting();
            }
            $(selector).html(msg)
            return this;
        }
    };

    //exposed Greetr Object
    Greetr.init = function(firstName, lastName, language) {
        //build my object's properties
        this.firstName = firstName || 'Default';
        this.lastName = lastName || 'Default';
        this.language = language || 'en';
        this.validateLang();
    }

    //initialize
    Greetr.init.prototype = Greetr.prototype;

    //attach the global object
    global.Greetr = global.G$ = Greetr;

})(window, jQuery);