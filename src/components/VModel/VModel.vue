<template>
  <div id="VModel">
    <el-card class="box-card">
      <el-tag>简写模式</el-tag>
      <div>
        <input type="text" v-model="inputValue" />
        {{inputValue}}
      </div>
    </el-card>

    <el-card>
      <el-tag>非简写模式</el-tag>
      <div>
        <input type="text" :value="inputValue" @input="changeValue" />
        {{inputValue}}
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputValue: ""
    };
  },
  methods: {
    changeValue(e) {
      this.inputValue = e.target.value;
    }
  }
};
</script>