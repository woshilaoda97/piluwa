<template>
    <div>
        <!-- 背景图 -->
        <figure></figure>
        <!-- 搜索 -->
        <seek></seek>
    </div>
</template>

<script>
export default {
    name: 'Homepage',
    created () {
        this.$store.commit("showTestData", 'hello');
    }
}
</script>

<style lang="stylus" scoped>
    figure 
        width 100%
        height 2.3rem
        background url(../../assets/img/mainpic.jpg) no-repeat 0 0/100% auto
            

</style>