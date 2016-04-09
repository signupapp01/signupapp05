'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', []).factory("user", function(){
    return {
        mongoID: '',
        email: '',
        password: '',
        passwordConfirm: '',
        fullname: '',
        address: '',
        city: '',
        state: '',
        country: '',
        zipcode: '',
        phone: ''
    };
});

angular.module('myApp.services', []).factory("user", function(){
    return {
        mongoID: '',
        email: '',
        password: '',
        passwordConfirm: '',
        fullname: '',
        address: '',
        city: '',
        state: '',
        country: '',
        zipcode: '',
        phone: ''
    };
});
