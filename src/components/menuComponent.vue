<template>
  <div class="navMenu">
    <label v-for="(navMenu, n) in navMenus" :key="n">
      <el-menu-item v-if="checkMenuChild(navMenu, true)" :key="navMenu.data.id" :data="navMenu" :index="navMenu.data.EName" :route="navMenu.data.path" @click="goRouter(navMenu.data.path)">
        <i :class="navMenu.data.icon"></i>
        <span slot="title" v-if="!isCollapse">{{navMenu.data.CName}}</span>
      </el-menu-item>

      <el-submenu v-if="checkMenuChild(navMenu, false)" :key="navMenu.data.id" :data="navMenu" :index="navMenu.data.EName">
        <template slot="title">
          <i :class="navMenu.data.icon"></i>
          <span slot="title" v-if="!isCollapse">{{navMenu.data.CName}}</span>
        </template>
        <NavMenu :navMenus="navMenu.children"></NavMenu>
      </el-submenu>
    </label>
  </div>
</template>

<script>
export default {
  name: 'NavMenu',
  props: ['navMenus', 'isCollapse'],
  data () {
    return {}
  },
  methods: {
    goRouter (item) {
      this.$router.push(item)
    },
    checkMenuChild (navMenu, isMenuItem) {
      let hasChild = navMenu.children;
      let hasNoChild = navMenu.children === null;
      let hasNavMenu = navMenu.data;
      let enable = navMenu.data.state === 'ENABLE';
      if (isMenuItem) {
        return hasNoChild && hasNavMenu && enable;
      } else {
        return hasChild && hasNavMenu && enable;
      }
    }
  }
}
</script>
