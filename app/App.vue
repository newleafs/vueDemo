<template>
  <div id="app">
      <Header></Header>
      <Aside></Aside>
      <Footer></Footer>  
  </div>  
</template>

<script>
    import Header from './components/header.vue'
    import Aside from './components/aside.vue'
    import Footer from './components/footer.vue'

  	export default {
      components:{
        Header,
        Aside,
        Footer
      }
  	}
</script>
