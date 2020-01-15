<template>
    <div>
        <TabBar
            fontColor="#aaa"
            selectedFontColor="#ff8027"
        >
            <Item 
                title="首页" 
                k="homepage"
                :icon="{ url: require('../../assets/icon/homepage.png') }" 
                :selectedIcon="{ url: require('../../assets/icon/selected-homepage.png') }"
                link="/homepage"
            ></Item>
            <Item 
                title="分类" 
                k="kind"
                :icon="{url:require('../../assets/icon/kind.png')}"
                :selectedIcon="{ url: require('../../assets/icon/selected-kind.png') }"
                link="/kind"
            ></Item>
            <Item 
                title="购物车"
                k="cart"
                :icon="{url:require('../../assets/icon/cart.png')}"
                :selectedIcon="{ url: require('../../assets/icon/selected-cart.png') }"
                link="/cart"
            ></Item>
            <Item 
                title="我的"
                k="my"
                :icon="{url:require('../../assets/icon/my.png')}"
                :selectedIcon="{ url: require('../../assets/icon/selected-my.png') }"
                link="/my"
            ></Item>
        </TabBar>
    </div>
</template>

<script>
import { TabBar } from '../../components';
const { Item } = TabBar; 

export default {
    name: 'Footer',
    components: {
        TabBar,
        Item
    }
}
</script>