import Vue from 'vue'
import Vuex from 'vuex'
import USD from '../assets/img/USD.png'
import BTC from '../assets/img/BTC.png'
import ETH from '../assets/img/ETH.png'
import ZEC from '../assets/img/ZEC.png'
import DASH from '../assets/img/DASH.png'
import EDR from '../assets/img/EDR.png'
import MNC from '../assets/img/MNC.png'

import LTC from '../assets/img/LTC.png'

Vue.use(Vuex)

const store = () => new Vuex.Store({

    state: {

       balances:[
{ id: '1', name:'USD', img:USD, user_id: '18', balance: '9068629030347566', balance_available: 9068138330347570},
{id: '2',name:'BTC',img: BTC, user_id: '18', balance: 8999948067073309, balance_available: 3000002167012309},
{id: '3',name:'ETH',img:ETH, user_id: '18', balance: 5700050359875508, balance_available: 8699985554675509 },
{id: "4",name:'LTC',img:LTC, user_id: '18', balance: 9005700359875508, balance_available: 8559956954675509},
{id: "5",name:'ZEC',img:ZEC, user_id: '18', balance: 580000035988, balance_available: 8999956954675509},
{id: "6",name:'DASH',img:DASH, user_id: '18', balance: 90800000359875508, balance_available: 8999956954675509},
{id: "7",name:'EDR',img:EDR, user_id: '18', balance: 9004400359875508, balance_available: 5467554409},
{id: "8",name:'MNC',img:MNC, user_id: '18', balance: 950000359875508, balance_available: 6399556954675509}
       ]
    },
    mutations: {
        increment (state) {
            state.counter++
        }
    }
})

export default store