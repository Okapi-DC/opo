<template>
  <div id="app">

    <Header></Header>
      <router-view/>
      <Footer></Footer>
  </div>
</template>

<script>

import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'



export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
}





</script>

<style lang="scss">

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
//  text-align: center;
  color: #7E7E7E;
}

</style>
