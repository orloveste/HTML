
Vue.component('merdeneaComponent', {
    props: ['merdenea'],
    template: '<li>Added merdenea</li>',//numele merdenelei de intrat aici din input

})
var app = new Vue({
    el: '#app',
    data: {
        merdenea: {
            numeMerdenea: ' ',
        },
        merdenele: []
    },
    methods :{
        addMerdenea : function () {
            this.merdenele.push(
                {nume: this.merdenea.numeMerdenea},

            );
            this.merdenea.numeMerdenea='';
        }
    }
});