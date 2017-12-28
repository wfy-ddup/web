<template>
  <div class="fixed_box ov">
    <router-link :to="'/'" class="fixed_bottom_btns current">
      <span class="img_par">
        <img class="wp100" src="../assets/btm1.png" alt="">
      </span>
      <p class="lh_1em">首页</p>
    </router-link>
    <router-link :to="'/apply'" class="fixed_bottom_btns">
      <span class="img_par">
        <img class="wp100" src="../assets/btm2.png" alt="">
      </span>
      <p class="lh_1em">报名</p>
    </router-link>
    <router-link :to="'/research'" class="fixed_bottom_btns">
      <span class="img_par">
        <img class="wp100" src="../assets/btm3.png" alt="">
      </span> 
      <p class="lh_1em">调查问卷</p>
    </router-link>
   </div>
</template>
<script>
  export default {
    data (){
      return {

      }
    }
  }
</script>
<style scoped>
  .fixed_box { 
    position:fixed;
    width:100%;
    left:0;
    bottom:0;
    z-index:4;
    background:#fff;
    padding:5px 0;
    border-top:1px solid #eeeeee;
  }

  .fixed_bottom_btns { 
    float:left;
    width:33.33%;
    display:block;
    text-align:center;
    color:#999;
    font-size:12px;
  }

  .img_par { 
    display:inline-block;
    width:28px;
    margin-bottom:3px;
  }

  .fixed_bottom_btns.current { color:#f15fde; }
  .lh_1em {
    font-size: 12px;
    line-height: 1;
  }
</style>