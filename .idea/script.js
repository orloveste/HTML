Vue.component('productComponent', {
    props: ['baba'],
    template: '<li>add new => {{baba.id}} - {{baba.nume}}, {{baba.cantitate}} piece</li>',//numele merdenelei de intrat aici din input
})

var app = new Vue({
    el: '#app',

    data: {
        product: {
            idProduct: 0,
            numeProduct: 'Water',
            quantity:'1'
        },
        listProduct: [],

        message: 'You loaded this page on ' + new Date().toLocaleString(),
    },
    methods :{
        addProduct : function () {
            this.listProduct.push(
                {id: this.product.idProduct +=1,
                nume: this.product.numeProduct,
                cantitate: this.product.quantity}
            );
             // this.product.numeProduct=''; //reset input
        },
    }
});

