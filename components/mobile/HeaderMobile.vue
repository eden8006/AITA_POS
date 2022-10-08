<template>
  <el-row class="header" type="flex" align="middle" justify="space-between">
      <div class="line" @click="show=!show"></div>
      <div class="wrapper" v-show="show">
        <ul>
          <li :class="index===0?'lli':''" @click="index=0">
            <nuxt-link :to="{ path: '/mobile/' }">
              <el-row class="menu" type="flex" align="middle" justify="left" @click.native="show=false">HOME</el-row>
            </nuxt-link>
          </li>
          <li :class="index===1?'lli':''" @click="index=1">
            <nuxt-link :to="{ path: '/mobile/menu' }">
              <el-row class="menu" type="flex" align="middle" justify="left" @click.native="show=false">MENU</el-row>
            </nuxt-link>
          </li>
          <li :class="index===2?'lli':''" @click="index=2">
            <nuxt-link :to="{ path: '/mobile/aboutUs' }">
              <el-row class="menu" type="flex" align="middle" justify="left" @click.native="show=false">ABOUT US</el-row>
            </nuxt-link>
          </li>
          <li :class="index===3?'lli':''" @click="index=3">
            <nuxt-link :to="{ path: '/mobile/contact' }">
              <el-row class="menu" type="flex" align="middle" justify="left" @click.native="show=false">CONTACT US</el-row>
            </nuxt-link>
          </li>
          <li :class="index===4?'lli':''" @click="index=4">
            <!-- <nuxt-link :to="{ path: '/mobile/onlineOrder' }"> -->
              <el-row class="menu" type="flex" align="middle" justify="left" @click.native="show=false">ONLINE ORDER</el-row>
            <!-- </nuxt-link> -->
          </li>
        </ul>
      </div>
  </el-row>
</template>

<script>
export default {
  name: 'HeaderMobile',
  data () {
    return {
      show:false,
      index:0
    }
  },
  methods: {

  },
  mounted () {
  }
}
</script>

<style lang="scss" scoped>
.header {
  position: absolute;
  top: 0;
  left: 50px;
  width: 100%;
  height: 80px;
  z-index: 2;
  .line{
    position: absolute;
    top: 46px;
    left: 0px;
    width: 48px;
    height: 7px;
    background: #FFFFFF;
    border-radius: 4px;
  }
  .line::before{
    position: absolute;
    left: 0;
    top: -16px;
    content: '';
    width: 48px;
    height: 7px;
    background: #FFFFFF;
    border-radius: 4px;
  }
  .line::after{
    position: absolute;
    left: 0;
    top: 16px;
    content: '';
    width: 48px;
    height: 7px;
    background: #FFFFFF;
    border-radius: 4px;
  }
}

.wrapper{
  position: absolute;
  left: 0px;
  top: 78px;
  background: #FFFFFF;
  padding: 15px 0;
  ul{
    width: 100%;
    padding: 0 35px;
    li{
      position: relative;
      text-align: left;
      .menu{
        height: 15px;
        font-size: 20px;
        font-family: Playfair Display;
        font-weight: 400;
        color: #35AFE5;
        line-height: 42px;
        text-align: left;
      }
    }
    .lli::before{
      position: absolute;
      top: 50%;
      left: -20px;
      transform: translateY(-50%);
      content: '';
      width: 8px;
      height: 8px;
      background: #35AFE5;
      border-radius: 50%;
    }
  }
  
}

</style>
