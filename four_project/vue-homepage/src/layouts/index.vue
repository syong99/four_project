<template>
    <section id="warp">
        <h1 class = "blind">이디야 카페</h1>
        <Header />
        <section id="container">
            <router-view/>
        <section>
        <footer />
        </section>
</template>

<script>
import Header from "./HeaderData.vue"
import Footer from "./FooterData.vue"
export default {
    components:{
        Header,
        Footer
    }
}
</script>
