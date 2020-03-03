
Vue.component('merdeneaComponent', {
    props: ['merdenele'],
    template: '<li>add new</li>',//numele merdenelei de intrat aici din input
})
var app = new Vue({
    el: '#app',
    data: {
        message: 'You loaded this page on ' + new Date().toLocaleString(),
        message2: ' second hello',
        message3: ' New generation',
        mesajStyle: 'color: red',
        messageStyleBlue: 'color: blue',
        seen: true,
        merdenea: {
            numeMerdenea: 'facatura',
        },
        merdenele: [msIndexedDB.open(app,indexOfItem)]
    },
    methods :{
        addMerdenea : function () {
            this.merdenele.push(
                {nume: this.merdenea.numeMerdenea},
            );
            //this.merdenea.numeMerdenea=''; //reset input
        }
    }
});