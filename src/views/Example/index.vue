<!--
  Generated template for the User List page.
  Created by Wang Zhongyu on 2019/04/22.
  If necessary, Please contact zy.wang@muheda.com
-->

<template>
  <div>
    <t-button :text="$t('modalTitle')"/>
    <Dropdown style="margin-left: 20px">
        <a href="javascript:void(0)">
          语言
          <Icon :size="18" type="md-arrow-dropdown"></Icon>
        </a>
        <DropdownMenu slot="list">
          <DropdownItem>驴打滚</DropdownItem>
          <DropdownItem>炸酱面</DropdownItem>
          <DropdownItem>豆汁儿</DropdownItem>
          <DropdownItem>冰糖葫芦</DropdownItem>
          <DropdownItem>北京烤鸭</DropdownItem>
        </DropdownMenu>
    </Dropdown>
  </div>
</template>

<script src="./src/index.js"></script>

<style lang="scss" src="./src/style.scss"></style>
