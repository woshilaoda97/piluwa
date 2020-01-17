<template>
    <div class="container">
        <div class="bg">
            <div class="bg-top"></div>
        </div>
        <main>
            <MyHeader></MyHeader>
            <MyOrder></MyOrder>
            <MyList></MyList>
        </main>
    </div>
</template>

<script>
import MyOrder from './MyOrder';
import MyHeader from './MyHeader';
import MyList from './MyList';

export default {
    components: {
        MyHeader,
        MyOrder,
        MyList,
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
        position fixed
        z-index -1
        width  100%
        height 100%
        background #f8f8f8
        .bg-top
            width  100%
            height 3rem
            background-image linear-gradient(45deg, #f9b27e , #e66524);
</style>