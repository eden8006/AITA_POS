<template>
  <div style="position: relative">
    <header-mobile />
    <nuxt/>
    <footer-mobile />
  </div>
</template>

<script>

import HeaderMobile from '~/components/mobile/HeaderMobile'
import FooterMobile from '~/components/mobile/FooterMobile'
export default {
  name: 'Mobile',
  components: { FooterMobile, HeaderMobile },
  data () {
    return {
    }
  },
  methods: {},
  beforeMount () {
    const isMobile = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
    if (!isMobile) {
      this.$router.push('/')
    }
  },
}
</script>

<style lang="scss" scoped>


</style>
