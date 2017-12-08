<template>
  <div class="test">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li v-for="(item,index) in list" @click="delBook(index)">{{item}}</li>
    </ul>
    <div class="add_book">
      <div class="ov">
        <span class="book_name">书名:</span>
        <button class="add_item" @click="addItem">添加</button>
        <div class="middle">
          <input type="text" v-model="bookName" class="ipt_book">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'testComponent',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      list:['课程1','课程2','课程3','课程4','课程5','课程6'],
      bookName:''
    }
  },
  methods:{
    addItem(){
      this.list.push(this.bookName);
      this.bookName = '';
    },
    delBook(idx){
      this.list.splice(idx,1);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.add_item {
  float: right;
  padding: 0;
  margin: 0;
  border: 0;
  width: 40px;
  height: 30px;
  line-height: 30px;
  font-weight: bold;
  font-size:14px;
  background-color: skyblue;
}

.book_name{
  float:left;
  height: 30px;
  line-height: 30px;
  font-size: 16px;
  color: #666;
  width: 80px;
}

.middle {
  overflow: hidden;
}

.ipt_book {
  padding: 0;
  margin: 0;
  border: 0;
  width: 100%;
  height: 30px;
  line-height: 30px;
  text-indent: 2em;
  font-size: 14px;
  outline: none;
}
</style>
