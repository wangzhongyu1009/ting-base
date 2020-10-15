<!--
  Generated template for the ${pageName} page.
  Created by ${Author} on ${CurrentDate}.
  If necessary, Please contact ${Email}
-->

<template>
  <div>
    
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  props: {
    array: {
      type: Array,
      default: () => [],
      required: false
    },
    object: {
      type: Object,
      default: () => {},
      required: false
    },
    number: {
      type: Number,
      default: null,
      required: false
    },
    string: {
      type: String,
      default: '',
      required: false
    }
  },
  watch: {
    array: function (newVal, oldVal) {
      console.log(newVal, oldVal)
    }
  },
  computed: {
    ...mapState({
      lang: state => state.app.lang
    })
  },
  data () {
    return {
      
    }
  },
  mounted () {

  },
  methods: {

  }
}
</script>
<style lang="scss" scoped>

</style>
