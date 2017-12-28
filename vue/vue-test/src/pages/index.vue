<template>
  <div v-if="resData!==null">
    <!-- top -->
    <topImg></topImg>
    <!-- middle -->
    <div class="re swiper_area">
      <span class="bottom_txt">
        最新动态
        <i class="bt_line"></i>
      </span>
      <swiper :options="swiperOption" ref="mySwiper">
        <swiper-slide v-for="(item,i) in resData.scrollImgs" :key="i"> <img :src="item"alt=""> </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
    <!-- list -->
    <div class="pr10 pl10 bg_035">
      <ul>
        <li class="ov bb1 pt20 pb10" v-for="(itemlist,n) in resData.list" :key="n">
          <a href="javascript:;" class="fl h62 wp34 mr10 ov ">
            <img :src="itemlist.userImage" alt="" class="wp100">
          </a>
          <div class="ov">
            <a href="javascript:;" class="db fz12 cor_f lh16 h48 ov clamp_3">{{itemlist.userMsg}}</a>
            <p class="lh14 cor_a5b fz12">{{itemlist.msgTime}}</p>
          </div>
        </li>
      </ul>
    </div>

    <myFooter></myFooter>
  </div>
</template>

<script>
import topImg from '../components/top.vue'
import myFooter from '../components/footer.vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import {swiper,swiperSlide} from 'vue-awesome-swiper'
export default {
  components: { topImg: topImg, myFooter: myFooter, swiper: swiper, swiperSlide: swiperSlide},
  data () {
    return {
      resData: null,
      swiperOption: { 
        noNextTick: true,
        initialSlide: 0,
        direction: 'horizontal',
        loop: true,
        speend: 300,
        autoplay: 2000,
        observer:true,
        observeParents:true
      }
    }
  },
  created () {
    this.getData();
  },
  methods: {
    getData () {
      this.$api.get('msg.json', null, (res) => {
        this.resData = res;
      });
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
  .title_img {
    width: 100%;
    position: relative;
    border-bottom: 1px solid #fff;
  }

  .re { position: relative; }

  .bottom_txt {
    position: absolute;
    white-space: nowrap;
    padding: 5px 10px;
    line-height: 1;
    left: 10px;
    top: -25px;
    z-index: 5;
    color: #16e5ed;
    font-size: 14px;
  }

  .bt_line {
    position: absolute;
    width: 60%;
    height: 3px;
    background: #16e5ed;
    left: 50%;
    margin-left: -30%;
    bottom: -2px;
    z-index: 5;
    border-radius: 2px;
  }

  .swiper_area { height: 175px; }
  .swiper-container { height: 100%; }
</style>
