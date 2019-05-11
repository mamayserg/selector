<template>
    <div class="box-balances">
        <div class="text-balance">
            <a href="#" @click="sortBy('balance_available')"> <img  class="img-arrow" src="../assets/img/white-arrow-png-41944.png"/></a>
        BALANCES
        </div>

        <div class="table-balances">
            <table >
                <tr  >
                    <th v-for="sort in sorts">
                        <div class="container-button">
                        <div class="sort-buttons-box">
                            <div ><a href="#" @click="sortBy(sort.name,sort.desc)"><img  class="sort-arrow" src="../assets/img/up.png"/></a></div>
                            <div ><a href="#" @click="sortBy(sort.name,sort.asc)"><img  class="sort-arrow" src="../assets/img/down.png"/></a></div>
                        </div>
                        <p id="button-name">{{sort.buttonName}}</p>
                        </div>
                    </th>

                </tr>
                <tr v-for=" balance in orderedUsers " v-bind:key="balance.id">
                    <th ><img id="img-curr" v-bind:src="balance.img"  /> {{balance.name}}</th>
                    <th>{{balance.balance}}</th>
                    <th>{{balance.balance_available}}</th>

                </tr>


            </table>
        </div>

    </div>
</template>
<script>
    import img from '../assets/img/DASH.png'
    export default {
        data(){
            return{
              im:'~/assets/img/BTC.png',
                sorts:[{name:'name', desc:'desc',asc:'asc',buttonName:''},
                    {name:'balance', desc:'desc',asc:'asc',buttonName:'ALL'},
                    {name:'balance_available', desc:'desc',asc:'asc',buttonName:'AVAILABLE'}],
                orderBy:'name',
                orderId:'asc'
            }
        },
        computed:{

            orderedUsers () {
                return _.orderBy(this.$store.state.balances, this.orderBy,this.orderId)
            },
          myBalance(){
              return img
          }

        },
        methods:{
            sortBy(order,by){
                this.orderBy=order;
                this.orderId=by;

                console.log(order,by);
            },
        }
    }
</script>
<style>
    table{

        table-layout: fixed;
        width: 100%;

        border-collapse: collapse;
    }
    th, td {border-bottom: 1px solid grey;
        padding:15px ;
        margin-left: 15px;
        color: white;
    }
    #img-curr{
        margin-right: 10px;
        margin-left: 10px;
    }
    #button-name{
        padding-top: 16px;
        padding-left: 6px;
        color: darkgrey;
        font-size: 16px;
        font-style: normal;
        font-family: sans-serif ;

    }
    .table-balances{
        margin: 1px;
    }
    .container-button{
        display: flex;
        flex-direction:row;
    }
    .sort-buttons-box{
        display: flex;
        flex-direction:column;
        padding: 0px;
        margin-left: 50px;

    }
    .sort-arrow{
        width: 25px;
        height: 25px;
    }
    .img-arrow{
       margin-top: 5px;
        width: 25px;
        height: 25px;
    }
    .text-balance{
        text-align: left;
        border-bottom: white  1px  solid;
        font-size: 25px;
        text-indent:1em;
        width:100% ;
        padding-bottom: 20px;
        padding-top: 20px;
        padding-left: 20px;
    }
    .box-balances{

        width: 80%;
        height: 100%;
        display: flex;
        justify-content: left;
        align-items: left;
        text-align: left;
        flex-direction: column;
        background-color: black;
        color: white;
        border: white 1px  solid;

    }
</style>