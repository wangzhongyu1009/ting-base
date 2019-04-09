<!--
  Generated template for the Nav page.
  Created by Wang Zhongyu on 2019/01/17.
-->

<template>
  <el-container>

    <!-- 侧边导航 -->
    <el-aside width="200px" style="background-color:rgb(84, 92, 100)">
      <el-row>
        <el-col :span="24">
          <el-menu
            default-active="userManage2"
            :collapse="isCollapse"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            background-color="#545c64"
            text-color="#fff"
            :collapse-transition="true"
            active-text-color="#ffd04b">
            <div class="logo">
              <img :src="logoImg"></img>
              <span>{{$systemText.companyName}}</span>
            </div>
            <NavMenu :navMenus="navMenus" :isCollapse="isCollapse"></NavMenu>
          </el-menu>
        </el-col>
      </el-row>
    </el-aside>
    
    <el-container>
      <!-- header -->
      <el-header>{{$systemText.systemTitle}}</el-header>

      <!-- 主内容区 -->
      <el-main>
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import NavMenu from '@/components/menuComponent'
import MenuList from '@/MDKit/HEVMacros/menuMacros'
export default {
  components: {
    NavMenu
  },
  data () {
    return {
      isCollapse: false,
      navMenus: MenuList,
      logoImg: require('sysStatic/logo.png')
    }
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>
