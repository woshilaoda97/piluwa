<template>
    <div>
        <figure>
            <img :src="require('../../assets/img/mainpic.jpg')" alt="">
        </figure>
    </div>
</template>

<script>
export default {
    name: 'Homepage'
}
</script>

<style lang="stylus" scoped>
    figure 
        img
            width 100%

</style>