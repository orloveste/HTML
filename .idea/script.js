
Vue.component('todo-item', {
    props: ['mytytle'],
    template: "<li>{{mytytle.text}}</li>",

})
Vue.component('todo-item-2', {
    props: ['mycars'],
    template: "<li>{{mycars.text}}</li>",
})
var app = new Vue({
    el: '#app',
    data: {
        list:[
            {id:0, text: 'First tytle'},
            {id:1, text: 'second tytle'},
            {id:2, text: 'Therd tytle'},
            {id:3, text: 'kebap tytle'}
        ],
        todos: [
            {id:0, text: 'Rabla'},
            {id:1, text: 'caruta'},
            {id:2, text: 'tricicleta'},
            {id:3, text: 'nemotorizata'}
        ]
    },
    methods :{
    }
})