<template>
    <div>
        <!-- <Header></Header> -->
        <!-- <Header></Header> -->
        <!-- <Header></Header> -->
        <!-- <Header></Header> -->
        <!-- <Header></Header> -->
        <router-view></router-view>
        <Footer></Footer>
    </div>
</template>

<script>
import Footer from "./page/Footer/Footer";
// import Header from './page/Header/Header';

export default {
    name: 'App',
    components: {
        // Header,
        Footer,
    }
}
</script>

<style lang="stylus" scope>
    a{

    }
</style>