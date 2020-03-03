
Vue.component('merdeneaComponent', {
    props: ['merdenea'],
    template: '<li <!--title="addMerdenea()"-->>add new</li>',//numele merdenelei de intrat aici din input

})
var app = new Vue({
    el: '#app',
    data: {
        message: 'You loaded this page on ' + new Date().toLocaleString(),
        message2: ' second hello',
        message3: ' New generation',
        mesajStyle: 'color: red',
        messageStyleBlue: 'color: blue',
        //message: 'new one',
        merdenea: {
            numeMerdenea: 'facatura',
        },
        merdenele: []
    },
    //template: '<div>{{this.merdenea.numeMerdenea}}<\div>',
    methods :{
        addMerdenea : function () {
            this.merdenele.push(
                {nume: this.merdenea.numeMerdenea},
            );
            //this.merdenea.numeMerdenea=''; //reset input
        },
        addInList : function () {
            this.addMerdenea()
        }
    }
});