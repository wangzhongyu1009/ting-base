<!--
  Generated template for the User List page.
  Created by Wang Zhongyu on 2019/04/22.
  If necessary, Please contact zy.wang@muheda.com
-->

<template>
  <div>
    <t-button style="margin-bottom:10px" :text="$t('common.common_qd')"/>
    <Table row-key="id" :columns="treeColumns" :data="treeData" border></Table>
  </div>
</template>

<script src="./src/index.js"></script>

<style lang="scss" scoped src="./src/style.scss"></style>
