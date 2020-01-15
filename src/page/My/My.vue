<template>
    <div class="container">
        <div class="bg"></div>
        <main>
            <van-button type="default" size="large">默认按钮</van-button>
        </main>
    </div>
</template>

<script>
import { Button } from "vant"

export default {
    components: {
        [Button.name]: Button,
    },
    name: 'My',
}
</script>

<style lang="stylus" scoped>
    .container
        position relative
        main
            padding .7rem .3rem 0
    .bg 
        position absolute
        width 100%
        height 3rem
        background-image linear-gradient(45deg, #f9b27e , #e66524);
        z-index -1
</style>