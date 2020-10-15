<!--
  Generated template for the Menu Item component.
  Created by Wang Zhongyu on 2019/05/08.
  If necessary, Please contact zy.wang@muheda.com
-->

<template>
  <Menu mode="horizontal" :active-name="activePath" theme="dark" width="auto">
    <MenuItem name="1">
      <Icon type="ios-paper"></Icon>
      <span>项目启动策划</span>
    </MenuItem>
    <MenuItem name="2">
      <Icon type="ios-bookmarks"></Icon>
      <span>项目工作台</span>
    </MenuItem>
    <MenuItem name="3">
      <Icon type="ios-pie"></Icon>
      <span>数据中心</span>
    </MenuItem>
    <MenuItem name="4">
      <Icon type="ios-videocam"></Icon>
      <span>现场直播</span>
    </MenuItem>
    <MenuItem name="5">
      <Icon type="ios-analytics"></Icon>
      <span>领导看板</span>
    </MenuItem>
    <MenuItem name="System" to="DropDown">
      <Icon type="ios-cog"></Icon>
      <span>系统运维</span>
    </MenuItem>
  </Menu>
</template>

<script src="./src/index.js"></script>

<style lang="scss" scoped src="./src/style.scss"></style>
