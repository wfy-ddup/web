<template>
  <div>
    <!-- top-img -->
    <topImg></topImg>
    <div class="pl10 pr10 pb10 bg_height">
      <div><img src="../assets/top.jpg" alt="" class="wp100"></div>
      <div class="brlb_1 pt45 pb30">
        <div class="wp80 ma_auto">
          <ul class="ov">
            <li class="ov mb10">
              <span class="fz12 lh26 cor_f fl">姓 名：</span>
              <div class="ov b1_20d">
                <input type="text" class="msg_ipt" placeholder="请输入真是姓名">
              </div>
            </li>
            <li class="ov mb10">
              <span class="fz12 lh26 cor_f fl">电 话：</span>
              <div class="ov b1_20d">
                <input type="text" class="msg_ipt" placeholder="请输入11位手机号">
              </div>
            </li>
            <li class="ov mb10">
              <span class="fz12 lh26 cor_f fl">行 业：</span>
              <div class="ov b1_20d">
                <input type="text" class="msg_ipt" placeholder="请输入您所从事的行业">
              </div>
            </li>
            <li class="ov mb10">
              <span class="fz12 lh26 cor_f fl">地 址：</span>
              <div class="ov b1_20d">
                <input type="text" class="msg_ipt" placeholder="请输入您的公司或门店详细地址">
              </div>
            </li>
            <li class="ov mb10">
              <span class="fz12 lh26 cor_f fl">职 位：</span>
              <div class="ov b1_20d">
                <input type="text" class="msg_ipt" placeholder="请输入您的职位或职责">
              </div>
            </li>
          </ul>
          <a href="javascript:;" class="db submit_btn" @click="popMask">
            <img src="../assets/btn01.jpg" class="wp100" alt="">
          </a>
          <p class="fz12 cor_f">
          注：<br>请确认填写您的个人相关信息，以确保能准确的与您沟通来安排核实的课程教学等工作。
          </p>
        </div>
      </div>
    </div>

    <!-- 弹框 -->
    <transition name="an">
      <div class="pop_box"  v-show="showPop" @click="popMask">
        <div class="warning_box">
          <h3 class="warning_txt">报名成功</h3>
        </div>
      </div>
    </transition>


    <!-- footer -->
    <myFooter></myFooter>
  </div>
</template>

<script>
  import myFooter from '../components/footer.vue'
  import topImg from '../components/top.vue'
  export default {
    name: 'applay',
    components: { myFooter, topImg },
    data () {
      return {
        showPop: false
      }
    },
    methods:{
      popMask () {
        this.showPop = !this.showPop
      }
    }
  }
</script>

<style scoped>
  .pop_box {
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background: rgba(0,0,0,0.4);
    transform: translate3d(0, 0, 0);
    z-index: 99;
  }

  .warning_box {
    position: absolute;
    width: 86%;
    left: 7%;
    top: 50%;
    transform: translate3d(0, -50%, 0);
    background: #fff;
    border-radius: 8px;
    padding: 10px 15px;
    opacity: 1;
  }

  .close_icon {
    position: absolute;
    width: 20px;
    height: 20px;
    line-height: 22px;
    text-align: center;
    font-size: 18px;
    border-radius: 50%;
    font-family: 'Arial';
    background: rgba(0,0,0,0.25);
    right: 5px;
    top: 5px;
    z-index: 5;
  }
  
  /*
    开始和结束状态的位置
   */
  .an-enter, .an-leave-active {
    opacity: 0.6;
    transform: translate3d(-100%, 0, 0);
  }
  /**
   * 动画执行的过程
   */
  .an-enter-active, .an-leave-active {
    transition: all 0.3s linear;
  }

  .warning_txt {
    text-align: center;
    height: 24px;
    line-height: 24px;
    font-size: 14px;
  }
</style>