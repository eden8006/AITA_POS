<template>
  <div class="wrapper">
    <div class="img-box">
      <ul>
        <li v-for="(item,index) in imgList" :key="index">
          <img :src="item.img" alt="">
        </li>
      </ul>
    </div>
    <div class="right-info">
      <div class="title-box">
        <h4>Our message</h4>
        <ul>
          <li v-for="(item,index) in symbolsList" :key="index">
            <div class="left-symblos">
              <div class="img-box" :style="item.style">
                <img :src="item.img" alt="">
              </div>
            </div>
            <div class="right-info">
              {{item.info}}
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="bottom-box">
      <h2>Copyright © 2022 - Designed By AIYA Studio</h2>
      <p>The above pictures are from Pexels or Google and are not for commercial use. If there is any infringement, please contact us to remove them.</p>
    </div>
  </div>
</template>

<script>
export default {
  name:"footerPage",
  data(){
    return{
      imgList:[
        {img:require('@/static/images/Home/img1.png')},
        {img:require('@/static/images/Home/img2.png')},
        {img:require('@/static/images/Home/img3.png')},
        {img:require('@/static/images/Home/img4.png')},
      ],
      symbolsList:[
        {img:require('@/static/images/Home/location.png'),info:'36-18 Main St，12th Floor Flushing，NY 11354',style:{width:'41px',height:'49px'}},
        {img:require('@/static/images/Home/phone.png'),info:'888-622-0811',style:{width:'46px',height:'44px'}},
        {img:require('@/static/images/Home/website.png'),info:'Marketing@aiya.us',style:{width:'49px',height:'49px'}},
      ]
    }
  }

}
</script>

<style lang="scss" scoped>
.wrapper{
  position: relative;
  width: 1920px;
  height: 652px;
  background: linear-gradient(90deg, #25A2D9, #56CAFE);
  .img-box{
    position: absolute;
    top: 96px;
    left: 300px;
    width: 638px;
    height: 363px;
    ul{
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      width: 100%;
      height: 100%;
      li{
        width: 309px;
        height: 171px;
        img{
          width: 100%;
        }
      }
    }
  }
  .right-info{
    position: absolute;
    top: 96px;
    right: 252px;
    width: 695px;
    height: 363px;
    .title-box{
      position: absolute;
      top: 24px;
      left: 0;
      width: 701px;
      height: 50px;
      h4{
        position: absolute;
        left: 112px;
        top: 0;
        z-index: 2;
        width: 367px;
        height: 50px;
        font-size: 55px;
        font-family: PlayfairDisplay-Bold;
        font-weight: 400;
        color: #FFFFFF;
        line-height: 50px;
        text-align: center;
      }
      ul{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        position: absolute;
        top: 90px;
        left: 0;
        height: 212px;
        width: 100%;
        li{
          position: relative;
          height: 49px;
          width: 100%;
          .left-symblos{
            position: absolute;
            left: 0;
            top: 0;
            width: 49px;
            height: 49px;
            .img-box{
              position: absolute;
              left: 50%;
              top: 50%;
              transform: translate(-50%,-50%);
              img{
                width: 100%;
              }
            }
          }
          .right-info{
            position: absolute;
            top: 50%;
            left: 72px;
            transform: translateY(-50%);
            width: 639px;
            height: 30px;
            font-size: 28px;
            font-family: SourceHanSansCN-Bold;
            font-weight:400;
            color: #FFFFFF;
            line-height: 30px;
          }
        }
      }
    }
    .title-box::after{
      position: absolute;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
      content: '';
      width: 71px;
      height: 1px;
      background-color: #fff;
    }
  }
  .bottom-box{
    h2{
      position: absolute;
      top: 531px;
      left: 50%;
      transform: translateX(-50%);
      width: 480px;
      height: 24px;
      font-size: 24px;
      font-family: Playfair Display;
      font-weight: 400;
      color: #FFFFFF;
      line-height: 27px;
    }
    p{
      position: absolute;
      top: 581px;
      left: 50%;
      transform: translateX(-50%);
      width: 1138px;
      height: 19px;
      font-size: 18px;
      font-family: Playfair Display;
      font-weight: 400;
      color: #FFFFFF;
      line-height: 27px;
    }
  }
}
</style>