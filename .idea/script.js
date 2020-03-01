var app = new Vue({
    el: '#app',
    data: {
        myObject: {
            accountName: '',
            password: ' ',

        },
        todos: [
            {textInvalidPass: 'invalid pass'},
            {textValidPass: 'you are log in'}
        ]

    },
    methods :{
        mySpecialFunction : function () {
           window.alert('you clicked the button'),
               password = 1234

        },
        hoverFunction : function () {
            console.log('over the button')
        }
    }
})