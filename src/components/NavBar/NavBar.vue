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
        height .102rem
        width 100%
        div
            position fixed
            top 0
            left 0
            width 100%
            height .102rem
            text-align center
            line-height .102rem
            background #fed
            z-index 10
            font-size .32rem
</style>