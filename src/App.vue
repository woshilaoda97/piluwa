<template>
    <div>
        <router-view></router-view>
        <keep-alive>
            <Footer v-if="$route.meta.footshow"></Footer>
        </keep-alive>
    </div>
</template>

<script>
import Footer from "./page/Footer/Footer";

export default {
    name: 'App',
    components: {
        Footer,
    }
}
</script>

<style lang="stylus" scope>
    a{

    }
</style>