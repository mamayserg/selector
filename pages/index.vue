<template>
  <div class="container">
    <div>
     <Selector></Selector>
    </div>
  </div>
</template>

<script>
import Selector from '~/components/Select.vue'

export default {
  components: {
      Selector
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
