<!--
  Generated template for the ToolBar page.
  Created by wangzhongyu on 2020-10-15.
  If necessary, Please contact wangzhongyu@epmworld.net
-->

<template>
  <div>
    <span v-for="item in list" :key=Math.random() class="mr10">
      <i-button v-if="item.type === 'add'" type="primary" icon="md-add" @click="output(item.method)">新建</i-button>
      <i-button v-if="item.type === 'edit'" type="warning" icon="ios-create-outline" @click="output(item.method)">编辑</i-button>
      <i-button v-if="item.type === 'search'" type="primary" ghost icon="ios-search" @click="output(item.method)">查询</i-button>
      <Button-group v-if="item.type === 'group'">
        <i-button v-for="sonItem in item.children" :key=Math.random() :icon="sonItem.type === 'import' ? 'ios-cloud-upload' : 'ios-cloud-download'" @click="output(sonItem.method)">{{sonItem.type === 'import' ? '导入' : '导出'}}</i-button>
      </Button-group>
    </span>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  props: {
    list: {
      type: Array,
      default: () => [],
      required: false
    },
    object: {
      type: Object,
      default: () => {},
      required: false
    },
    number: {
      type: Number,
      default: null,
      required: false
    },
    string: {
      type: String,
      default: '',
      required: false
    }
  },
  watch: {
    array: function (newVal, oldVal) {
      console.log(newVal, oldVal)
    }
  },
  computed: {
    ...mapState({
      lang: state => state.app.lang
    })
  },
  data () {
    return {
      
    }
  },
  mounted () {
    console.log(this.list)
  },
  methods: {
    output (name) {
      this.$emit(name, true)
    }
  }
}
</script>
<style lang="scss" scoped>

</style>
