<template>
  <b-container>
<div class="padding_top_260">

  <kinesis-container  event="scroll">
    <kinesis-element
        :strength="100"
        type="depth">
      <img v-bind:src="require('@/assets/1.svg')" class="heroheader" alt="service-image">
    </kinesis-element>

  </kinesis-container>

</div>
  </b-container>
</template>

<script>
export default {
name: "about"
}
</script>

<style scoped>

h2 {
  width:100%;
}


</style>
