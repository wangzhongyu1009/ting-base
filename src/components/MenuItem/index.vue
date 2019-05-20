<!--
  Generated template for the Menu Item component.
  Created by Wang Zhongyu on 2019/05/08.
  If necessary, Please contact zy.wang@muheda.com
-->

<template>
  <Menu active-name="1-2" theme="dark" width="auto" :class="menuitemClasses" accordion>
    <Submenu name="1">
      <template slot="title">
        <Icon type="ios-navigate"></Icon>
        <span>系统管理</span>
      </template>
      <MenuItem name="1-1">
        <Icon type="ios-people"></Icon>
        <span>用户管理</span>
      </MenuItem>
      <MenuItem name="1-2">
        <Icon type="ios-people"></Icon>
        <span>组织管理</span>
      </MenuItem>
      <MenuItem name="1-3">
        <Icon type="ios-people"></Icon>
        <span>权限管理</span>
      </MenuItem>
    </Submenu>
    <Submenu name="2">
      <template slot="title">
        <Icon type="ios-construct"></Icon>
        <span>日志管理</span>
      </template>
    </Submenu>
    <MenuItem name="3">
      <Icon type="ios-settings" style="margin-right:12px"></Icon>
      <span>控制台</span>
    </MenuItem>
    <MenuItem name="4">
      <Icon type="ios-settings" style="margin-right:12px"></Icon>
      <span>控制台</span>
    </MenuItem>
  </Menu>
</template>

<script src="./src/index.js"></script>

<style lang="scss" scoped src="./src/style.scss"></style>
