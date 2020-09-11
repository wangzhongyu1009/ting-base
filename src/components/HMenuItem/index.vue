<!--
  Generated template for the Menu Item component.
  Created by Wang Zhongyu on 2019/05/08.
  If necessary, Please contact zy.wang@muheda.com
-->

<template>
  <Menu mode="horizontal" active-name="1-2" theme="light" width="auto">
    <Submenu name="1">
      <template slot="title">
        <span>系统管理</span>
      </template>
      <MenuItem name="1-1">
        <span>用户管理</span>
      </MenuItem>
      <MenuItem name="1-2">
        <span>组织管理</span>
      </MenuItem>
      <MenuItem name="1-3">
        <span>权限管理</span>
      </MenuItem>
    </Submenu>
    <Submenu name="2">
      <template slot="title">
        <span>日志管理</span>
      </template>
      <MenuItem name="2-1">
        <span>系统日志</span>
      </MenuItem>
    </Submenu>
    <MenuItem name="3">
      <span>控制台</span>
    </MenuItem>
    <MenuItem name="4">
      <span>控制台</span>
    </MenuItem>
  </Menu>
</template>

<script src="./src/index.js"></script>

<style lang="scss" scoped src="./src/style.scss"></style>
