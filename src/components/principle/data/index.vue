<template>
  <div>
    <p>prop.info:{{info}}</p>
    <p>prop.name:{{name}}</p>
    <p>prop.list:{{list}}</p>
    <p>data.a:{{a}}</p>
    <p>message:{{message}}</p>
    <div>
      <h3>操作队列</h3>
      <el-card>
        <ul>
          <li :key="record" v-for="record in recordList">{{record}}</li>
        </ul>
      </el-card>
    </div>

    <p>
      <el-button @click="handleBchange">change data.b</el-button>
      <el-button @click="updateMessage">updateMessage</el-button>
    </p>
  </div>
</template>
<script>
export default {
  name: "VueData",
  props: {
    info: Object,
    name: String,
    list: Array
  },
  data() {
    return {
      recordList: [],
      message: "未更新",
      a: "hello",
      b: "world"
    };
  },
  methods: {
    updateMessage: function() {
      this.message = "已更新";
      console.log(this.$el.textContent); // => '未更新'
      this.$nextTick(function() {
        console.log(this.$el.textContent); // => '已更新'
      });
    },
    handleBchange() {
      this.b = "vue" + new Date();
      this.recordList.push(
        `data.b发生改变，但是组件没有更新，因为组件模板没有引用data.b  ${this.b}`
      );
      console.log(
        "data.b发生改变，但是组件没有更新，因为组件模板没有引用data.b",
        this.b
      );
    }
  },
  created() {
    console.log(this.$root.$options);
  },
  updated() {
    console.log("触发子组件更新");
  }
};
</script>
<style>
</style>