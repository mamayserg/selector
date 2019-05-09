<template>
  <div class="box">
     <div class="textBank">
       <p>BANK DEPOSIT{{test}}</p>
     </div>
    <div class="form-pay-system">

        <div class="box-select">
          <p>COUNTRY</p>
         <select class="box-selection" v-model="selected.country">
          <option  v-for="country in countries" v-bind:value="country.name">
            {{ country.name }}
          </option>
         </select>
         <span>Выбрано: {{selected.country}}</span>
        </div>
        <template v-if="selected.country!=''">
        <div class="box-select" >
          <p>SELECT PAY SYSTEM</p>
          <select class="box-selection"   v-model="selected.system">
            <option  v-for="system in paySystem" v-bind:value="system.systemCurrency" >
                <p>{{system .name }}</p>
            </option>
          </select>
          <span>Выбрано: {{selected.system}}</span>
        </div>
        </template>

        <template v-if="selected.system!=''">
        <div class="box-select"  >
          <p>AVAILABLE CURRENCIES FOR THIS COUNTRY</p>
          <select class="box-selection"    v-model="selected.currency" >
            <option v-for="system in selected.system" v-bind:value="system.iso"   >
              {{system.id}}
            </option>
          </select>
          <span>Выбрано: {{selected.currency}}</span>
        </div>
        </template>
        <form >
        <template v-if="selected.currency!=''">
        <div class="box-select" >
          <p>ENTER DESIRE AMOUNT HERE </p>

            <input class="box-selection"  type="number"  v-model.number="selected.num"
                   placeholder="0">
            <div class="confirm-box">Enter amount here and confirm to move next step</div>
        </div>
        </template>
           <template v-if="selected.num!=''">
            <div class="button-box" >
              <button id="button-confirm" class="button-select" @click="saveSelect">Confirm</button>
              <button id="button-back" class="button-select">Back</button>
            </div>
           </template>
      </form>


</div>


  </div>
</template>
<script>
  export  default {
props:{
    test:''
},
      data(){
          return{

              selected:{
                  country: '',
                  system: '',
                  currency: '',
                  num: ''
              },

              // selectedCountry: '',
              // selectedSystem:'',
              countries: [
          {id: "AF", name: "Afghanistan", default_currency: null},
          {id: "AX", name: "Aland Islands", default_currency: null},
           {id: "AL", name: "Albania", default_currency: null},
           {id: "DZ", name: "Algeria", default_currency: null},
           {id: "AS", name: "American Samoa", default_currency: null},
           {id: "AD", name: "Andorra", default_currency: null},
           {id: "AO", name: "Angola", default_currency: null},
          {id: "AI", name: "Anguilla", default_currency: null},
           {id: "AQ", name: "Antarctica", default_currency: null},
           {id: "AG", name: "Antigua and Barbuda", default_currency: null},
           {id: "AR", name: "Argentina", default_currency: null},
           {id: "AM", name: "Armenia", default_currency: null},
           {id: "AW", name: "Aruba", default_currency: null},
          {id: "AU", name: "Australia", default_currency: null},
           {id: "AT", name: "Austria", default_currency: null},
           {id: "AZ", name: "Azerbaijan", default_currency: null},
           {id: "BS", name: "Bahamas", default_currency: null},
           {id: "BH", name: "Bahrain", default_currency: null},
           {id: "BD", name: "Bangladesh", default_currency: null},
           {id: "BB", name: "Barbados", default_currency: null},
           {id: "BY", name: "Belarus", default_currency: null},
           {id: "BE", name: "Belgium", default_currency: null},
           {id: "BZ", name: "Belize", default_currency: null},
           {id: "BJ", name: "Benin", default_currency: null},
           {id: "BM", name: "Bermuda", default_currency: null},
           {id: "BT", name: "Bhutan", default_currency: null},
           {id: "BO", name: "Bolivia, Plurinational State of", default_currency: null},
           {id: "BQ", name: "Bonaire, Sint Eustatius", default_currency: null},
           {id: "BA", name: "Bosnia and Herzegovina", default_currency: null},
           {id: "BW", name: "Botswana", default_currency: null},
           {id: "BV", name: "Bouvet Island", default_currency: null},
           {id: "BR", name: "Brazil", default_currency: null},
           {id: "IO", name: "British Indian Ocean Territory", default_currency: null},
           {id: "BN", name: "Brunei Darussalam", default_currency: null}

      ],
              paySystem:[{id: "CashU", name: "CashU",systemCurrency:
                                                     [{id: "AED", iso: "AED"},
                                                     {id: "AFN", iso: "AFN"},
                                                     {id: "ALL", iso: "ALL"}
                                                     ]
                         },
                         {id: "Worldremit", name: "Worldremit",
                             systemCurrency:[{id: "ED", iso: "ED"},
                                      {id: "UA", iso: "UA"},
                                      {id: "ALL", iso: "ALL"},
                                      {id: "ARS", iso: "ARS"},
                                      {id: "AUD", iso: "AUD"},
                                      {id: "AWG", iso: "AWG"},
                                      {id: "AZN", iso: "AZN"}


                             ]
                         },


                         {id: "Moneygram", name: "Moneygram",
                             systemCurrency:[
                                             {id: "BDT", iso: "BDT"},
                                             {id: "BGN", iso: "BGN"},
                                             {id: "BHD", iso: "BHD"},
                                             {id: "BIF", iso: "BIF"},
                                             {id: "BMD", iso: "BMD"},
                                             {id: "BND", iso: "BND"}


      ]
                         }
                         ]

      }
      },
      methods:{
          add(item){
              console.log(item,"log");
          },
          saveSelect() {
              console.log(this.selected,"item");

          }
      }

  }
</script>0px;
border: white 1px solid;
width:
<style>
  #button-confirm{
    background-color: lime;
  }
  #button-back{
    background-color: black;
  }
  .button-box{
    margin-top: 18px;
    display: flex;
    justify-content: left;
    flex-direction: row;

  }
  .button-select{
    font-size:16px ;
   margin:5px ;
    width: 50%;
    height:60px ;
    color: white;
  }
  .confirm-box{
    font-style: normal;
    color: gray;
    font-size: 19px;
    font-family: "Helvetica";
  }
  .form-pay-system{
    width: 70%;

  }
  .box-select{
    margin-top: 25px;
  }
.box {
  padding: 30px;
  width: 100%;
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
.textBank{
  text-align: left;
  border-bottom: white  1px  solid;
  margin-bottom:5px ;
  font-size: 25px;
  text-indent:1em;
  width:100% ;

}
  .box-selection{
    background-color: black;
    color: white;
    height: 45px;
    width: 100%;
    font-size: 18px;
    padding-left: 10px;
  }
</style>
