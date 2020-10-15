export default {
  data () {
    return {
      tableHeight: 200,
      catalogRowId: '1',
      catalogList: [
        {
          id: '1',
          name: '投资类别',
          ename: 'Trend Statistics'
        },
        {
          id: '2',
          name: '国家',
          ename: 'Sources Statistics'
        },
        {
          id: '3',
          name: '省/直辖市',
          ename: 'Project Distribution'
        },
        {
          id: '4',
          name: '计量单位',
          ename: 'Personal Accounting'
        },
        {
          id: '5',
          name: 'A类前置条件',
          ename: 'Personal Accounting'
        },
        {
          id: '6',
          name: 'B类前置条件',
          ename: 'Personal Accounting'
        }
      ],
      columns: [{
        title: '编号',
        key: 'code'
      },{
        title: '字段名称',
        key: 'name'
      },{
        title: '可选的值',
        key: 'value'
      },{
        title: '状态',
        key: 'status',
        width: 100,
        align: 'center'
      }],
      tableData: [{
        code: 'A-001',
        name: 'type',
        value: '类别1',
        status: '启用'
      },{
        code: 'A-002',
        name: 'type',
        value: '类别2',
        status: '停用'
      },{
        code: 'A-003',
        name: 'type',
        value: '类别3',
        status: '启用'
      },{
        code: 'A-004',
        name: 'type',
        value: '类别4',
        status: '启用'
      },{
        code: 'A-005',
        name: 'type',
        value: '类别5',
        status: '停用'
      },{
        code: 'A-006',
        name: 'type',
        value: '类别6',
        status: '启用'
      },{
        code: 'A-007',
        name: 'type',
        value: '类别7',
        status: '启用'
      },{
        code: 'A-008',
        name: 'type',
        value: '类别8',
        status: '启用'
      },{
        code: 'A-008',
        name: 'type',
        value: '类别8',
        status: '启用'
      },{
        code: 'A-008',
        name: 'type',
        value: '类别8',
        status: '启用'
      },{
        code: 'A-008',
        name: 'type',
        value: '类别8',
        status: '启用'
      },{
        code: 'A-008',
        name: 'type',
        value: '类别8',
        status: '启用'
      },{
        code: 'A-008',
        name: 'type',
        value: '类别8',
        status: '启用'
      },{
        code: 'A-008',
        name: 'type',
        value: '类别8',
        status: '启用'
      },{
        code: 'A-008',
        name: 'type',
        value: '类别8',
        status: '启用'
      }]
    }
  }
}