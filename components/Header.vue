<template>
  <div class="header">
    <nuxt-link :to="{ path: '/' }">
      <div class="logo">LOGO</div>
    </nuxt-link>
    <nuxt-link :to="{ path: '/' }">
      <div class="menu"><span>Home</span></div>
    </nuxt-link>
    <nuxt-link :to="{ path: '/menu' }">
      <div class="menu"><span>Menu</span></div>
    </nuxt-link>
    <nuxt-link :to="{ path: '/aboutUs' }">
      <div class="menu"><span>About us</span></div>
    </nuxt-link>
    <nuxt-link :to="{ path: '/contact' }">
      <div class="menu"><span>Contact us</span></div>
    </nuxt-link>
    <!-- <nuxt-link :to="{ path: '/onlineOrder' }"> -->
      <div class="menu"><span>Online order</span></div>
    <!-- </nuxt-link> -->
  </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {}
  },
  methods: {},
  created () {
  }
}
</script>

<style lang="scss" scoped>

.header {
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  top: 0;
  z-index: 3;
  width: 1920px;
  height: 75px;
  background: rgba(255,255,255,.2);
  .menu {
    width: 150px;
    height: 32px;
    font-size: 22px;
    font-family: Playfair Display;
    font-weight: bold;
    color: #FFFFFF;
    line-height: 32px;
    cursor: pointer;
    text-align: center;
    span{
      display: inline-block;
      height: 55px;
    }
  }
  .menu:hover span{
    border-bottom: 4px solid #fff;
  }

  .logo {
    width: 124px;
    height: 32px;
    font-size: 40px;
    font-family: Playfair Display;
    font-weight: bold;
    font-style: italic;
    color: #ffffff;
    line-height: 32px;
  }
}


</style>
