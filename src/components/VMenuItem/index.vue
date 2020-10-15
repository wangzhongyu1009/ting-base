<!--
  Generated template for the Menu Item component.
  Created by Wang Zhongyu on 2019/05/08.
  If necessary, Please contact zy.wang@muheda.com
-->

<template>
  <Menu :active-name="activePath" theme="light" width="auto" :class="menuitemClasses" accordion>
    <MenuItem name="DropDown" to="DropDown">
      <Icon type="md-list" style="margin-right:12px"></Icon>
      <span>下拉选项</span>
    </MenuItem>
    <MenuItem name="Example" to="Example">
      <Icon type="ios-settings" style="margin-right:12px"></Icon>
      <span>项目类型</span>
    </MenuItem>
    <MenuItem name="3">
      <Icon type="ios-settings" style="margin-right:12px"></Icon>
      <span>项目所在地</span>
    </MenuItem>
    <MenuItem name="4">
      <Icon type="ios-settings" style="margin-right:12px"></Icon>
      <span>公司信息</span>
    </MenuItem>
    <MenuItem name="5">
      <Icon type="ios-settings" style="margin-right:12px"></Icon>
      <span>组织信息</span>
    </MenuItem>
    <MenuItem name="6">
      <Icon type="ios-settings" style="margin-right:12px"></Icon>
      <span>人员信息</span>
    </MenuItem>
    <MenuItem name="7">
      <Icon type="ios-settings" style="margin-right:12px"></Icon>
      <span>项目角色模版</span>
    </MenuItem>
    <MenuItem name="8">
      <Icon type="ios-settings" style="margin-right:12px"></Icon>
      <span>单位工程码</span>
    </MenuItem>
    <!-- <MenuItem name="9">
      <Icon type="ios-settings" style="margin-right:12px"></Icon>
      <span>设备大类码</span>
    </MenuItem>
    <MenuItem name="10">
      <Icon type="ios-settings" style="margin-right:12px"></Icon>
      <span>材料大类码</span>
    </MenuItem>
    <MenuItem name="11">
      <Icon type="ios-settings" style="margin-right:12px"></Icon>
      <span>WBS模版</span>
    </MenuItem>
    <MenuItem name="12">
      <Icon type="ios-settings" style="margin-right:12px"></Icon>
      <span>项目档案类目</span>
    </MenuItem>
    <MenuItem name="13">
      <Icon type="ios-settings" style="margin-right:12px"></Icon>
      <span>生态圈信息</span>
    </MenuItem> -->
  </Menu>
</template>

<script src="./src/index.js"></script>

<style lang="scss" scoped src="./src/style.scss"></style>
