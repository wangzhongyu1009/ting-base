export default {
  data () {
    return {
      treeColumns: [{
        title: '编号',
        key: 'code'
      },{
        title: '预算科目',
        key: 'name',
        tree: true
      },{
        title: '状态',
        key: 'status'
      }],
      treeData: [{
        code: 1
      }]
    }
  }
}