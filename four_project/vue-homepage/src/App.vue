<template>
  <div>
        <Header/>
        <router-view/>
        <Footer/>
    </div>
</template>
<script>
import Header from './layouts/HeaderData'
import Footer from './layouts/FooterData'
export default {
  components: { Header, Footer },
  computed: {
    user () {
      return this.$store.state.user
    }
  }
}
</script>
