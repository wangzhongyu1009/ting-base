<!--
  Generated template for the User List page.
  Created by Wang Zhongyu on 2019/04/22.
  If necessary, Please contact zy.wang@muheda.com
-->

<template>
  <div class="report">
    <CateNav :list="catalogList" :selected="catalogRowId" @selectedRow="catalogRow"></CateNav>
    <div class="form">
      <Toolbar :list="toolBarList" @add="add"></Toolbar>
      <div class="chart">
        <TTable :columns="columns" :tableData="tableData" :height="190"></TTable>
      </div>
    </div>
  </div>
</template>

<script src="./src/index.js"></script>

<style lang="scss" scoped src="./src/style.scss"></style>
