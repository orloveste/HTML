Vue.component('merdeneaComponent', {
    props: ['merdenele'],
    // props: ['merdenea'],
    template: '<li>add new</li>',//numele merdenelei de intrat aici din input
})
Vue.component('todo-item',{
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
})

var data = {a:1}

var app = new Vue({
    el: '#app',

    data: {
        merdenea: {
            numeMerdenea: 'facatura',
        },
        merdenele: [],



        groceryList:[
            {id:0, text:'Milk'},
            {id:1, text:'Eggs'},
            {id:2, text:'Lava cake'}
        ],

        message: 'You loaded this page on ' + new Date().toLocaleString(),
        seen: true,
        unseen: false,
        todos:[
            {text: false},
            {text: true},
            {text: app},
            {text: this},
            {text: function () {
                }},
            // {text: new onmessage}, TypeError: onmessage is not a constructor
            {text: null},
            {text: typeof String},
            {text: "symbol"},
            // {text: async }, ReferenceError: async is not defined
            {text: delete function () {

                }},
            // {text: import()}, SyntaxError: import() requires a specifier
            {text: undefined},
            {text: void this},
        ]
    },
    methods :{
        addMerdenea : function () {
            this.merdenele.push(
                {nume: this.merdenea.numeMerdenea},
            );
            // this.merdenea.numeMerdenea=''; //reset input
        },
        reverseMessage: function () {
            this.message = this.message.split('').reverse().join('')
        }
    }
});
app.todos.push({ text: 'New item' })
