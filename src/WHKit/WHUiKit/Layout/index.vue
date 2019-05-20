<!--
  Generated template for the Nav page.
  Created by Wang Zhongyu on 2019/01/17.
-->

<template>
  <Layout class="layout_container">

    <Header>
      
    </Header>

    <Layout>

      <Sider collapsible :collapsed-width="78" v-model="isCollapsed">
        <menu-item :isCollapsed="isCollapsed"/>
      </Sider>

      <Layout :style="{padding: '0 24px 24px'}">
        <Breadcrumb :style="{margin: '24px 0'}">
          <BreadcrumbItem>Home</BreadcrumbItem>
          <BreadcrumbItem>Components</BreadcrumbItem>
          <BreadcrumbItem>Layout</BreadcrumbItem>
        </Breadcrumb>

        <Content class="content">
            <keep-alive>
              <router-view/>
            </keep-alive>
        </Content>
      </Layout>
    </Layout>
  </Layout>
</template>

<script>
import MenuItem from '@/components/MenuItem/index'
export default {
  components: {
    MenuItem
  },
  data () {
    return {
      isCollapsed: false
    }
  }
}
</script>

<style scoped lang="scss">
.layout_container {
  height: 100%;
}
.content {
  padding: 24px;
  background-color: #fff;
}
</style>
