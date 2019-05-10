<template>
  <div class="container">
    <div>
        <Balances></Balances>
     <!--<Selector></Selector>-->
    </div>
  </div>
</template>

<script>
import Selector from '~/components/Select.vue'
import Balances from '../components/Balances'

export default {
  components: {
      Selector,
      Balances
  }
}
</script>

<style>
.container {
  height: 1104px;
  width: 100%;

  display: flex;
  justify-content: left;
  flex-direction: column;
  background-color: black;
}
</style>
