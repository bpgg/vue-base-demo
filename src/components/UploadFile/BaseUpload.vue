<template>
  <!-- action 必选的参数 -->
  <el-upload
    action="https://jsonplaceholder.typicode.com/posts/"
    :on-preview="handlePreview"
    :on-remove="handleRemove"
    :before-remove="beforeRemove"
    multiple
    :limit="2"
    :on-exceed="handleExceed"
    :file-list="fileList"
    :auto-upload="false"
    :show-file-list="true"
    drag
    ref="upload_1"
  >
    <el-button-group>
      <el-button size="small" type="primary">点击上传</el-button>
      <el-button type="success" size="small" @click="submitUpload">上传到服务器</el-button>
    </el-button-group>

    <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
  </el-upload>
</template>

<script>
export default {
  data() {
    return {
      fileList: []
    };
  },
  methods: {
    submitUpload() {
      this.$refs.upload_1.submit();
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    handleExceed(files, fileList) {
      this.$message.warning(
        `当前限制选择 3 个文件，本次选择了 ${
          files.length
        } 个文件，共选择了 ${files.length + fileList.length} 个文件`
      );
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`);
    }
  }
};
</script>

<style scoped>
</style>