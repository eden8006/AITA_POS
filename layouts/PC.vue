<template>
  <div style="position: relative">
    <Header />
    <nuxt />
    <Footer />
    <el-backtop>
      <!-- <img class="backTop" src="/image/backTop.png" alt=""> -->
    </el-backtop>
  </div>
</template>

<script>
export default {
  name: 'PC',
  data () {
    return {}
  },
  methods: {},
  beforeMount () {
    const isMobile = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
    if (isMobile) {
      this.$router.push('/mobile')
    }
  },
}
</script>

<style lang="scss" scoped>
.backTop{
  width: 84px;
  height: 84px;
  background: #F1F1F1;
  display: block;
}

</style>
