<template>
  <div id="app" v-if="showApp">
    <router-view/>
  </div>
</template>

<script>
export default {
  data () {
    return {
      showApp: false
    }
  },
  beforeCreate () {
    let obj = {
      default_theme: './WHKit/HEVMacros/themeMacros.less',
      red_theme: './WHKit/HEVMacros/redThemeMacros.less'
    }
    let local_theme = this.getLocalData('local_theme') || 'default_theme'
    import(`${obj[local_theme]}`).then(res => {
      this.showApp = true
    })
  }
}
</script>
