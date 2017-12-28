<template>
  <div>
    <!-- top- -->
    <div><img src="../assets/3_01.jpg" alt="" class="wp100"></div>
    <!-- middle -->
    <div class="pt15 pb15 bg_height2">
      <div class="wp60 ov ma_auto">
        <ul class="ov">
            <li class="ov mb5">
              <span class="fz12 lh26 cor_f fl mr5">姓  名：</span>
              <div class="ov bra_5">
                <input type="text" class="msg_ipt2">
              </div>
            </li>
            <li class="ov mb5">
              <span class="fz12 lh26 cor_f fl mr5">联系方式：</span>
              <div class="ov bra_5">
                <input type="text" class="msg_ipt2">
              </div>
            </li>
            <li class="ov mb5">
              <span class="fz12 lh26 cor_f fl mr5">点  名：</span>
              <div class="ov bra_5">
                <input type="text" class="msg_ipt2">
              </div>
            </li>
          </ul>
      </div>
      <p class="fz12 cor_f mr10 mt15 ml10">
          尊敬的先生/女士： 您好!由于近期庐阳区商务局和万家热线将会在亳州路、双岗两个街道开展一个有关互联网的培训，为了使培训课程能够更好的满足大家的需求，请您填写以下内容并提出您的要求与想法，我们将作为设计课程的参考，谢谢您的合作!
      </p>
      <div class="pr10 pl10 pt15">
         <ul>
          <li class="fz12 cor_f mb10">
            <p class="fwb cor_f lh18">1.您现在所从事的行业是？（）</p>
            <p class="lh18">
              <input type="checkbox" class="vm mr5" id="check1"><label for="check1"><span>百货</span></label>  
            </p>
            <p class="lh18">
              <input type="checkbox" class="vm mr5" id="check2"><label for="check2"><span>教育、亲子</span></label>
            </p>
            <p class="lh18">
              <input type="checkbox" class="vm mr5" id="check3"><label for="check3"><span>餐饮</span></label>
            </p>
            <p class="lh18">
              <input type="checkbox" class="vm mr5" id="check4"><label for="check4"><span>婚庆</span></label>
            </p>
            <p class="lh18">
              <input type="checkbox" class="vm mr5" id="check5"><label for="check5"><span>个体商户</span></label>
            </p>
            <div class="lh18 ov">
              <div class="fl">
                <input type="checkbox" class="vm mr5" id="check30"><label for="check30"><span class="">其他</span></label>
              </div>
              <div class="ov"><input type="text" class="wp50 other_ipt"></div>
            </div>
          </li>
          <li class="fz12 cor_f mb10">
            <p class="fwb cor_f lh18">2．您之前有参加过互联网相关的培训吗? ( )</p>
            <p class="lh18">
              <input type="checkbox" class="vm mr5" id="check7"><label for="check7"><span>有</span></label>
            </p>
            <p class="lh18">
              <input type="checkbox" class="vm mr5" id="check8"><label for="check8"><span>无</span></label>
            </p>
          </li>
          <li class="fz12 cor_f mb10">
            <p class="fwb cor_f lh18">3．您否有通过网上商城拓展业务？(  )</p>
            <p class="lh18">
              <input type="checkbox" class="vm mr5" id="check9"><label for="check9"><span>是，自建商城独立运营。</span></label>
            </p>
            <p class="lh18">
              <input type="checkbox" class="vm mr5" id="check10"><label for="check10"><span>是，通过淘宝等第三方平台租用</span></label>
            </p>
            <p class="lh18">
              <input type="checkbox" class="vm mr5" id="check11"><label for="check11"><span>有想法，目前还处于观望中，等各方面做出合理评估后再打算实施。</span></label>
            </p>
            <div class="lh18 ov">
              <div class="fl">
                <input type="checkbox" class="vm mr5" id="check31"><label for="check31"><span class="">其他</span></label>
              </div>
              <div class="ov"><input type="text" class="wp50 other_ipt"></div>
            </div>
          </li>
          <li class="fz12 cor_f mb10">
            <p class="fwb cor_f lh18">4．您至今未接触互联网运营的主要原因有哪些？(  )</p>
            <p class="lh18">
              <input type="checkbox" class="vm mr5" id="check12"><label for="check12"><span>缺少专业团队或人才，平台运营有难度</span></label>
            </p>
            <p class="lh18">
              <input type="checkbox" class="vm mr5" id="check13"><label for="check13"><span>人员工资、平台维护、广告投放等运作成本太高。</span></label>
            </p>
            <p class="lh18">
              <input type="checkbox" class="vm mr5" id="check14"><label for="check14"><span>担心效果，很多身边的企业尝试不理想，不敢轻易尝试。</span></label>
            </p>
            <div class="lh18 ov">
              <div class="fl">
                <input type="checkbox" class="vm mr5" id="check32"><label for="check32"><span class="">其他</span></label>
              </div>
              <div class="ov"><input type="text" class="wp50 other_ipt"></div>
            </div>
          </li>
          <li class="fz12 cor_f mb10">
            <p class="fwb cor_f lh18">5.如果参加互联网培训，您想学习什么课程？（ ）</p>
            <p class="lh18">
              <input type="checkbox" class="vm mr5" id="check15"><label for="check15"><span>互联网发展趋势</span></label>
            </p>
            <p class="lh18">
              <input type="checkbox" class="vm mr5" id="check16"><label for="check16"><span>自媒体运营</span></label>
            </p>
            <p class="lh18">
              <input type="checkbox" class="vm mr5" id="check17"><label for="check17"><span>网络平台使用</span></label>
            </p>
            <div class="lh18 ov">
              <div class="fl">
                <input type="checkbox" class="vm mr5" id="check34"><label for="check34"><span class="">其他平台</span></label>
              </div>
              <div class="ov"><input type="text" class="wp50 other_ipt"></div>
            </div>
          </li>
          <li class="fz12 cor_f mb10">
            <p class="fwb cor_f lh18">6．您认为培训安排在什么时间比较合适?(可多选)</p>
            <p class="lh18">
              <input type="checkbox" class="vm mr5" id="check18"><label for="check18"><span>周一</span></label>
            </p>
            <p class="lh18">
              <input type="checkbox" class="vm mr5" id="check19"><label for="check19"><span>周二</span></label>
            </p>
            <p class="lh18">
              <input type="checkbox" class="vm mr5" id="check20"><label for="check20"><span>周三</span></label>
            </p>
            <p class="lh18">
              <input type="checkbox" class="vm mr5" id="check21"><label for="check21"><span>周四</span></label>
            </p>
            <div class="lh18 ov">
              <div class="fl">
                <input type="checkbox" class="vm mr5" id="check35"><label for="check35"><span class="">其他时间</span></label>
              </div>
              <div class="ov"><input type="text" class="wp50 other_ipt"></div>
            </div>
          </li>
          <li class="fz12 cor_f mb10">
            <p class="fwb cor_f lh18">7.你希望本次培训在多长时间： ( )</p>
            <p class="lh18">
              <input type="checkbox" class="vm mr5" id="check22"><label for="check22"><span>1个小时内</span></label>
            </p>
            <p class="lh18">
              <input type="checkbox" class="vm mr5" id="check23"><label for="check23"><span>3个小时内</span></label>
            </p>
            <p class="lh18">
              <input type="checkbox" class="vm mr5" id="check24"><label for="check24"><span>6个小时内</span></label>
            </p>
          </li>
          <li class="fz12 cor_f mb10">
            <p class="fwb cor_f lh18">8.您还想要具体学习那种类型的培训课题?</p>
            <div class="lh18 ov">
              <div class="fl">
                <span class=""></span>
              </div>
              <div class="ov"><input type="text" class="wp100 other_ipt"></div>
            </div>
          </li>
          <li class="fz12 cor_f mb10">
            <p class="fwb cor_f lh18">9.对于互联网电培训，您有什么建议?</p>
            <div class="lh18 ov">
              <div class="fl">
                <span class=""></span>
              </div>
              <div class="ov"><input type="text" class="wp100 other_ipt"></div>
            </div>
          </li>
        </ul>
      </div>
      <p class="fz12 cor_f mr10 mt15 ml10">
          非常感谢您的宝贵时间，我们会尽力安排好此次课程，谢谢您的参与!
      </p>
      <a href="#" class="db submit_btn"><img src="../assets/btn02.jpg" class="wp100" alt=""></a>
    </div>
    <myFooter></myFooter>
  </div>
</template>

<script>
  import myFooter from '@/components/footer.vue'
  export default {
    name: 'research',
    components: { myFooter },
    data () {
      return {}
    }
  }
</script>