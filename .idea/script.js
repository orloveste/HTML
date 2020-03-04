var app = new Vue({
    el: '#app',
    data: {
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
    }
});
app.todos.push({ text: 'New item' })
