<template>
    <header>
        <div :style="styl">
            {{title}}
        </div>
    </header>
</template>

<script>
export default {
    name: 'Navbar',
    props: {
        title: {
            type: String,
        },
        backBtn: {
            type: Boolean,
        },
        styl: {
            type: Object
        }
    },
}
</script>

<style lang="stylus">
    header
        display flex
        height .51rem
        width 100%
        div
            position fixed
            top 0
            left 0
            width 100%
            height .51rem
            text-align center
            line-height .51rem
            background #fed
            z-index 10
            font-size .16rem
</style>