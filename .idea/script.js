var app = new Vue({
    el: '#app',
    data () {
        return{
            info: null,
            update: null,
            usdCode: null,
            usdRate: null,
            usdSymbol: null,
            euroCode: null,
            euroRate: null,
            euroSymbol: null,
            statusCode: null,
        }
    },
    mounted () {
        var self  = this
        axios
            .get('https://api.coindesk.com/v1/bpi/currentprice.json')
            .then(function (response) {
                self.info = response.data.bpi;
                self.update = response.data.time.updated;
                self.statusCode = response.status;
                self.usdCode = response.data.bpi.USD.code;
                self.usdRate = response.data.bpi.USD.rate;
                self.usdSymbol = response.data.bpi.USD.symbol;

                self.euroCode = response.data.bpi.EUR.code;
                self.euroRate = response.data.bpi.EUR.rate;
                self.euroSymbol = response.data.bpi.EUR.symbol;
            })
    }
})

