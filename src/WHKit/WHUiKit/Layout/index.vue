<!--
  Generated template for the Nav page.
  Created by Wang Zhongyu on 2019/01/17.
-->

<template>
  <Layout class="layout_container">

    <Sider collapsible :collapsed-width="78" v-model="isCollapsed">
      <Header class="layout_header">
        <img v-if="!isCollapsed" src="@/assets/logo.png" style="width:40px;height:40px;margin-top:12px;margin-right:5px">
        {{isCollapsed ? 'PMS'  : '项目管理系统'}}
      </Header>
      <menu-item :isCollapsed="isCollapsed"/>
    </Sider>
    
    <Layout>
      <Header style="background:#fff;border-bottom:2px solid #eee;padding:0 15px">
        <Row type="flex" justify="end" class="code-row-bg" style="text-align:center">
          
          <i-col span="19">
            <h-menu-item/>
          </i-col>

          <i-col span="2" class="row_item">
            <Icon type="ios-person" size="18" style="margin-top:-2px;margin-right:2px"></Icon>
            <span class="text_name">管理员</span>
            <div class="h_line"></div>
          </i-col>

          <i-col span="1" class="row_item">
            <Dropdown @on-click="changeTheme">
              <span class="text_name">主题</span>
              <Dropdown-menu slot="list">
                <Dropdown-item :selected="getLocalData('local_theme') === 'default_theme'" name="default_theme">
                  <div class="default_theme"></div>
                </Dropdown-item>
                <Dropdown-item :selected="getLocalData('local_theme') === 'red_theme'" name="red_theme">
                  <div class="red_theme"></div>
                </Dropdown-item>
              </Dropdown-menu>
            </Dropdown>
            <div class="h_line"></div>
          </i-col>

          <i-col span="1" class="row_item">
            <Dropdown @on-click="changeLang">
              <span class="text_name">{{languageName}}</span>
              <Dropdown-menu slot="list">
                <Dropdown-item name="zhCN">中文</Dropdown-item>
                <Dropdown-item name="en">English</Dropdown-item>
              </Dropdown-menu>
            </Dropdown>
            <div class="h_line"></div>
          </i-col>

          <i-col span="1" class="row_item">
            <span class="text_name" @click="logout">注销</span>
          </i-col>

        </Row>
      </Header>

      <div style="height:calc(100vh - 64px);display:flex;background-color:#f5f7f9">

        <div style="height:calc(100% - 20px);margin:10px 0 10px 10px;background-color:#fff;border-radius:5px;box-shadow: 1px 1px 8px #d0d0d0;padding:10px;width:calc(100% - 90px)">
          <keep-alive>
            <router-view/>
          </keep-alive>
        </div>
        
        <div style="height:100%;width:80px;position:relative">
          <div class="nav_icon">
            <Badge :count="9">
              <img class="demo_badge" src="@/assets/images/HomePage/todo.png">
              <div class="demo_text">待办</div>
            </Badge>
          </div>
          <div class="nav_icon">
            <Badge :count="3">
              <img class="demo_badge" src="@/assets/images/HomePage/warning.png">
              <div class="demo_text">警示</div>
            </Badge>
          </div>
          <div class="nav_icon">
            <Badge :count="1">
              <img class="demo_badge" src="@/assets/images/HomePage/lead.png">
              <div class="demo_text">指引</div>
            </Badge>
          </div>

          <span style="position:absolute;bottom:50px;left:20px;cursor:pointer" title="切换布局" @click="changeLayout">
            <Icon type="ios-shirt" size="40" color="#08f"/>
          </span>
        </div>
      </div>

    </Layout>

  </Layout>
</template>

<script>
import MenuItem from '@/components/MenuItem/index'
import HMenuItem from '@/components/HMenuItem/index'
import { mapState, mapActions } from 'vuex'
export default {
  components: {
    MenuItem,
    HMenuItem
  },
  data () {
    return {
      isCollapsed: false,
      languageName: this.exchangName(this.getLocalData('lang'))
    }
  },
  computed: {
    ...mapState({
      lang: state => state.app.lang,
      theme: state => state.app.theme
    })
  },
  methods: {
    ...mapActions({
      setLang: 'setLang',
      setTheme: 'setTheme'
    }),
    changeLang (item) {
      if (this.lang && item === this.lang) {
        return
      }
      this.languageName = this.exchangName(item)
      this.setLang(item).then(res => {
      })
    },
    changeTheme (item) {
      if (this.theme && item === this.theme) {
        return
      }
      this.setTheme(item).then(res => {
        window.location.reload()
      })
    },
    exchangName (name) {
      return name === 'zhCN' ? '中文' : 'En'
    },
    changeLayout () {
      let currentLayout = this.getLocalData('layout') || 'V'
      window.localStorage.setItem('layout', currentLayout === 'V' ? 'H' : 'V')
      window.location.reload()
    },
    logout () {
      this.$router.replace({ path: '/Login' })
    }
  }
}
</script>

<style scoped lang="scss">
@import '../../HEVMacros/styleMacros';
.layout_container {
  height: 100%;
}
.content {
  margin: 12px;
  padding: 10px;
  background-color: #fff;
  width: calc(100% - 60px);
}
.content_bar {
  width: 60px;
  margin-right: 12px;
}
.ivu-btn>.ivu-icon {
  font-size: 16px;
}
.h_line {
  height: 15px;
  width: 1px;
  background-color: #d0d0d0;
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}
.default_theme {
  background: #3399ff;
  width: 100%;
  height: 20px;
}
.red_theme {
  background: red;
  width: 100%;
  height: 20px;
}
.text_name {
  color: $themeColor;
}
.row_item {
  cursor: pointer;
}
.row_item:hover {
  background-color: rgba(206,206,206,0.1);
}
.layout_header {
  padding: 0;
  color: #fff;
  font-size: 20px;
  text-align: center;
}
.demo_badge{
  width: 42px;
  height: 42px;
  border-radius: 6px;
  display: inline-block;
}
.demo_text {
  margin-top: 5px;
  font-weight: 800;
}
.nav_icon {
  text-align: center;
  margin-top: 40px;
  cursor: pointer;
}
</style>
