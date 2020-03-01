var app = new Vue({
    el: '#app',
    data: {
        message: 'You loaded this page on ' + new Date().toLocaleString(),
        message2: ' second hello',
        message3: ' New generation',
        mesajStyle: 'color: red',
        messageStyleBlue: 'color: blue',
        shouldAppear: true,
        shouldantAppear: false
    }
})