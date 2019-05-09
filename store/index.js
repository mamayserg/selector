import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = () => new Vuex.Store({

    state: {
       balances:[
{ id: '1',img:"../assets/img/BNB.png", user_id: '18', balance: '9068629030347566', balance_available: '9068138330347570'},
{id: '2', user_id: '18', balance: '8999948067073309', balance_available: '3000002167012309'},
{id: '3', user_id: '18', balance: '9000000359875508', balance_available: '8999956954675509' },
{id: "4", user_id: '18', balance: '9000000359875508', balance_available: '8999956954675509'},
{id: "5", user_id: '18', balance: '9000000359875508', balance_available: '8999956954675509'},
{id: "6", user_id: '18', balance: '9000000359875508', balance_available: '8999956954675509'},
{id: "7", user_id: '18', balance: '9000000359875508', balance_available: '54675509'},
{id: "8", user_id: '18', balance: '9000000359875508', balance_available: '8999956954675509'},
{id: "9", user_id: '18', balance: '08', balance_available: '8999956954675509'},
{id: 10, user_id: '18', balance: '9000000359875508', balance_available: '8999956954675509'},
{id: 11, user_id: '18', balance: '5', balance_available: '75509'}
       ]
    },
    mutations: {
        increment (state) {
            state.counter++
        }
    }
})

export default store