<!--
  Generated template for the table page.
  Created by wangzhongyu on 2020-10-15.
  If necessary, Please contact wangzhongyu@epmworld.net
-->

<template>
  <div>
    <Table stripe border :columns="columns" :data="tableData" :height="tableHeight"></Table>
    <Page style="text-align:right;margin-top:6px" :total="100" show-elevator show-sizer show-total/>
  </div>
</template>
<script>
export default {
  props: {
    columns: {
      type: Array,
      default: () => []
    },
    tableData: {
      type: Array,
      default: () => []
    },
    height: {
      type: Number,
      required: false,
      default: ''
    }
  },
  watch: {
    
  },
  computed: {
    
  },
  mounted () {
    this.tableHeight = window.innerHeight - this.height
    window.onresize = () => {
      return (() => {
        this.tableHeight = window.innerHeight - this.height
      })()
    }
  },
  data () {
    return {
      tableHeight: 200
    }
  },
  methods: {

  }
}
</script>
