<template>
    <div class="box-balances">
        <div class="text-balance">
            <a href="#" @click=""> <img  class="img-arrow" src="../assets/img/white-arrow-png-41944.png"/></a>
        BALANCES
        </div>

        <div class="table-balances">
            <table >
                <tr >
                    <th><button class="sort-buttons-box">ff</button></th>
                    <th><button class="sort-buttons-box">ff</button></th>
                    <th><button class="sort-buttons-box">ff</button></th>
                </tr>
                <tr v-for=" balance in myBalance" v-bind:key="balance.id">
                    <th ><img :src="balance.img"/> {{balance.user_id}}</th>
                    <th>{{balance.balance_available}}</th>
                    <th>{{balance.balance}}</th>

                </tr>


            </table>
        </div>

    </div>
</template>
<script>
    export default {
        data(){
            return{

            }
        },
        computed:{
          myBalance(){
              return this.$store.state.balances
          }
        },
        methods:{
          ball(){
              console.log(this.$store.state.balances);
          }
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
    .table-balances{
        margin: 1px;
    }
    .sort-buttons-box{
        padding: 10px;
        margin-left: 50px;

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