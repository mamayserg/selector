import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = () => new Vuex.Store({

    state: {

       balances:[
{ id: '1', name:'USD', img: '../assets/img/BNB.png ', user_id: '18', balance: '9068629030347566', balance_available: 9068138330347570},
{id: '2',name:'BTC', user_id: '18', balance: 8999948067073309, balance_available: 3000002167012309},
{id: '3',name:'ETH', user_id: '18', balance: 5700050359875508, balance_available: 8699985554675509 },
{id: "4",name:'LTC', user_id: '18', balance: 9005700359875508, balance_available: 8559956954675509},
{id: "5",name:'ZEC', user_id: '18', balance: 580000035988, balance_available: 8999956954675509},
{id: "6",name:'DASH', user_id: '18', balance: 90800000359875508, balance_available: 8999956954675509},
{id: "7",name:'EDR', user_id: '18', balance: 9004400359875508, balance_available: 5467554409},
{id: "8",name:'MNC', user_id: '18', balance: 950000359875508, balance_available: 6399556954675509}
       ]
    },
    mutations: {
        increment (state) {
            state.counter++
        }
    }
})

export default store