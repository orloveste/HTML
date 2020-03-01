var app = new Vue({
    el: '#app',
    data: {

    },
    methods :{
        mySpecialFunction : function () {
           window.alert('you clicked the button')
        },
        hoverFunction : function () {
            console.log('over the button')
        }
    }
})