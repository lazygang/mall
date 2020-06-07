<template>
   <tar-bar>
      <tar-bar-item path="/home">
        <img slot="item-icon" src="~assets/img/tabbar/home_fill.svg" alt="">
        <img slot="item-icon-active" src="~assets/img/tabbar/home.svg" alt="">
        <div slot="item-text">首页</div>
      </tar-bar-item>
      <tar-bar-item path="/category">
         <img slot="item-icon" src="~assets/img/tabbar/round_menu_fill.svg" alt="">
          <img slot="item-icon-active" src="~assets/img/tabbar/round_menu.svg" alt="">
        <div slot="item-text">分类</div>
      </tar-bar-item>
      <tar-bar-item  path="/cart">
         <img slot="item-icon" src="~assets/img/tabbar/cart_fill.svg" alt="">
          <img slot="item-icon-active" src="~assets/img/tabbar/cart.svg" alt="">
        <div slot="item-text">购物车</div>
      </tar-bar-item>
      <tar-bar-item  path="/profile">
         <img slot="item-icon" src="~assets/img/tabbar/my_fill_light.svg" alt="">
          <img slot="item-icon-active" src="~assets/img/tabbar/my_fill.svg" alt="">
        <div slot="item-text">我的</div>
      </tar-bar-item>      
    </tar-bar>
</template>

<script>
    import TarBar from '../../common/tarbar/TabBar'
    import TarBarItem from 'components/common/tarbar/TabBarItem'
    export default {
        name: "MainTarBar",
        components: {
            TarBar,
            TarBarItem
        }
    }
</script>

<style scoped>

</style>