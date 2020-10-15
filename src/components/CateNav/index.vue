<!--
  Generated template for the CateNav page.
  Created by wangzhongyu on 2020-10-14.
  If necessary, Please contact wangzhongyu@epmworld.net
-->

<template>
  <div :class="catalogClass">
    <ul>
      <li v-for="item of list" :key="item.id" @click="changeRow(item)">
        <span :class="item.id === selected ? 'active' : ''">{{lang==='en' ? item.ename : item.name}}</span>
      </li>
    </ul>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  props: {
    list: {
      type: Array,
      default: () => []
    },
    selected: {
      type: String,
      default: '',
      required: true
    }
  },
  watch: {
    
  },
  computed: {
    ...mapState({
      lang: state => state.app.lang
    })
  },
  data () {
    return {
      catalogClass: this.getLocalData('local_theme') === 'red_theme' ? 'catalog_red' : 'catalog_default'
    }
  },
  methods: {
    changeRow (item) {
      this.$emit('selectedRow', item)
    }
  }
}
</script>

<style lang="less" scoped>
.catalog_default {
  width: 160px;
  height: 100%;
  background: #fbfbfb;
  padding: 0;
  ul {
    height: 100%;
    width: 100%;
    li {
      height: 50px;
      line-height: 50px;
      width: 100%;
      cursor: pointer;
      &:hover {
        background: @navBgColor-default_theme;
      }
      span {
        display: inline-block;
        width: 100%;
        height: 100%;
        font-size: 14px;
        font-weight: 400;
        padding-left: 10px;
      }
      .active{
        background: @navBgColor-default_theme;
        border-right: 2px solid @navColor-default_theme;
        color: @navFontColor-default_theme;
        font-weight: 700;
      }
    }
  }
}
.catalog_red {
  width: 160px;
  height: 100%;
  background: #fbfbfb;
  padding: 0;
  ul {
    height: 100%;
    width: 100%;
    li {
      height: 50px;
      line-height: 50px;
      width: 100%;
      cursor: pointer;
      &:hover {
        background: @navBgColor-red_theme;
      }
      span {
        display: inline-block;
        width: 100%;
        height: 100%;
        font-size: 14px;
        font-weight: 400;
        padding-left: 10px;
      }
      .active {
        background: @navBgColor-red_theme;
        border-right: 2px solid @navColor-red_theme;
        color: @navFontColor-red_theme;
        font-weight: 700;
      }
    }
  }
}
</style>
