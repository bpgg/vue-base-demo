<template>
  <div id="marked">
    <el-row gutter="40">
      <el-col span="12">
        <textarea :value="markdString" @input="_updateMarkdString" class="markdString-box"></textarea>
      </el-col>
      <el-col span="12">
        <el-card v-html="htmlString" class="htmlString-box"></el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import marked from "marked";
export default {
  data() {
    return {
      markdString: "",
      htmlString: ""
    };
  },
  computed: {
    compiledMarkdown: function() {
      return marked(this.initInputValue, { sanitize: true });
    }
  },
  watch: {
    markdString(value) {
      marked.setOptions({
        renderer: new marked.Renderer(),
        gfm: true,
        tables: true,
        breaks: true,
        pedantic: false,
        sanitize: false,
        smartLists: true,
        smartypants: false
      });

      this.htmlString = marked(value);
    },
    value(value) {
      this.markdString = value;
    }
  },
  methods: {
    _updateMarkdString(e) {
      this.markdString = e.target.value;
    }
  }
};
</script>
<style lang="scss" scoped>
#marked {
  width: 100%;
  .htmlString-box,
  .markdString-box {
    &::-webkit-scrollbar {
      display: none; /* 隐藏滚动条 */
    }
    box-sizing: border-box;
    width: 100%;
    height: 400px;
    overflow-y: auto;
    padding: 20px;
  }

  .markdString-box {
    outline: none;
    border: 1px #f1f1f1 solid;
  }
}
</style>>

