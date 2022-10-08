<template>
  <div class="wrapper">
    <div class="background">
      <div class="right"><img src="@/static/images/About/bg-img1.png" alt=""></div>
      <div class="center"><img src="@/static/images/About/bg-img2.png" alt=""></div>
      <div class="left"><img src="@/static/images/About/bg-img3.png" alt=""></div>
    </div>
    <div class="top">
      <h2>Our message</h2>
      <ul>
        <li v-for="(item,index) in list" :key="index">
          <div class="left-icon">
            <div class="img-box">
              <img :src="item.img" alt="" >
            </div>
          </div>
          <div class="right-info">{{item.info}}</div>
        </li>
      </ul>
    </div>
    <div class="footer">
      <div class="bottom-label1">
        <h2>Copyright © 2022 - Designed By AIYA Studio</h2>
        <p>The above pictures are from Pexels or Google and are not for commercial use. If there is any infringement, please contact us to remove them.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'userInfoMobile',
  data(){
    return{
      list:[
        {img:require('@/static/images/Home/location1.png'),info:'36-18 Main St,12th Floor Flushing,NY 11354'},
        {img:require('@/static/images/Home/phone1.png'),info:'888-622-0811'},
        {img:require('@/static/images/Home/website1.png'),info:'Marketing@aiya.us'},
        {img:require('@/static/images/Home/time.png'),info:'Monday to Saturday  8:30-10:30'}
      ]
    }
  }

}
</script>

<style lang="scss" scoped>
.wrapper{
  position: relative;
  width: 750px;
  height: 701px;
  background: rgba(26, 29, 28,.08);
  .background{
    .right{
      position: absolute;
      right: 0;
      top: 0;
      width: 288px;
      height: 428px;
      img{
        height: 100%;
      }
    }
    .center{
      position: absolute;
      top: 343px;
      left: 206px;
      width: 225px;
      height: 231px;
      img{
        width: 100%;
      }
    }
    .left{
      position: absolute;
      top: 116px;
      left: 39px;
      width: 219px;
      height: 240px;
      img{
        width: 100%;
      }
    }
  }
  .top{
    h2{
      position: absolute;
      top: 79px;
      left: 50%;
      transform: translateX(-50%);
      width: 398px;
      height: 50px;
      font-size: 55px;
      font-family: Montserrat-Bold;
      font-weight: bold;
      color: #000000;
      line-height: 69px;
    }
    ul{
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      position: absolute;
      top: 176px;
      left: 50%;
      transform: translateX(-50%);
      width: 628px;
      height: 277px;
      li{
        position: relative;
        height: 49px;
        width: 100%;
        .left-icon{
          position: absolute;
          left: 0;
          top: 0;
          width: 49px;
          height: 49px;
          .img-box{
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%,-50%);
            width: 49px;
            height: 49px;
            img{
              width: 100%;
            }
          }
        }
        .right-info{
          position: absolute;
          top: 50%;
          left: 68px;
          transform: translateY(-50%);
          width: 602px;
          height: 25px;
          font-size: 26px;
          font-family: Montserrat-Light;
          font-weight: 300;
          color: #000000;
          line-height: 25px;
        }
      }
    }
  }
  .footer{
    position: absolute;
    top: 502px;
    .bottom-label1{
      width: 750px;
      margin-top: 50px;
      h2{
        width: 750px;
        height: 23px;
        font-size: 22px;
        font-family: Playfair Display;
        font-weight: 400;
        color: #000000;
        line-height: 27px;
        text-align: center;
      }
      p{
        margin-left: -50px;
        width: 849px;
        font-size: 24px;
        font-family: Playfair Display;
        font-weight: 400;
        line-height: 27px;
        color: #000000;
        transform: scale(.8);
        text-align: center;
        margin-top: 26px;
      }
    }
  }
}
</style>