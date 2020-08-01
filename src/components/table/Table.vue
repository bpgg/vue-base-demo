<template>
  <div id="file-export">
    <div class="update-el">
      <el-button @click="resetDateFilter">清除日期过滤器</el-button>
    </div>

    <el-button @click="clearFilter">清除所有过滤器</el-button>
    <el-table ref="filterTable" :data="tableData" style="width: 100%">
      <el-table-column
        prop="date"
        label="日期"
        sortable
        width="180"
        column-key="date"
        :filters="dateFilters"
        :filter-method="dateFilterHandler"
      ></el-table-column>
      <el-table-column prop="name" label="姓名" width="180"></el-table-column>
      <el-table-column prop="address" label="地址" :formatter="addrformatter"></el-table-column>
      <el-table-column
        prop="tag"
        label="标签"
        width="100"
        :filters="tagFilters"
        :filter-method="filterTag"
        filter-placement="bottom-end"
        class-name="update-filters"
      >
        <template slot-scope="scope">
          <el-tag
            :type="scope.row.tag === '家' ? 'primary' : 'success'"
            disable-transitions
          >{{scope.row.tag}}</el-tag>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          tag: "家"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
          tag: "公司"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
          tag: "家"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
          tag: "公司"
        }
      ],
      dateFilters: [
        { text: "2016-05-01 text", value: "2016-05-01" },
        { text: "2016-05-02", value: "2016-05-02" },
        { text: "2016-05-03", value: "2016-05-03" },
        { text: "2016-05-04", value: "2016-05-04" }
      ],
      tagFilters: [
        { text: "家", value: "家" },
        { text: "公司", value: "公司" }
      ]
    };
  },
  methods: {
    resetDateFilter() {
      this.$refs.filterTable.clearFilter("date");
    },
    clearFilter() {
      this.$refs.filterTable.clearFilter();
    },
    addrformatter(row, column) {
      // console.log(column);
      return row.address + "with formatter";
    },
    filterTag(value, row) {
      return row.tag === value;
    },
    /**
     * 针对列数据进行过滤
     */
    dateFilterHandler(value, row, column) {
      const property = column["property"];
      console.log(property);
      console.log(column);
      return row[property] === value;
    }
  }
};
</script>

<style lang="scss" scoped>
.update-el .el-button {
  color: rebeccapurple;
}
</style>

<style>
.el-table-filter__bottom {
  border-top: 9px solid #ebeef5 !important;
  padding: 20px;
}
</style>