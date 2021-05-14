const setting: any = {
    name: 'test-template',
    title: '组件',
    path: 'src/app/ofmodules/test-template',
    formService: [
        {
            name: 'getTabelList',
            method: 'doPost',
            url: '/asset/asset/info/search',
        },
    ],
    search: [
        {
            label: '设备名称',
            type: 'text',
            formControlName: 'assetName',
            initValue: '',
            validators: [],
            param: 'assetName',
        },
        {
            label: '设备类型',
            type: 'dropdown',
            mode: 'normal',
            getListFn: 'assettypeList',
            formControlName: 'assetType',
            initValue: '',
            validators: [],
            options: 'assettypes',
            componentTypeList: 'service',
            dataList: {
                label: 'employeeName',
                titleLabel: 'employeeName',
                value: 'id',
            },
            service: {
                name: 'getAssettypeList',
                method: 'doGet',
                url: 'asset/enum/statusmachine/asset_type',
            },
            param: '{page:0,size:0}',
        },
        {
            label: '所属员工',
            type: 'dropdown',
            mode: 'lazy',
            getListFn: 'staffMenuList',
            formControlName: 'employeeId',
            initValue: '',
            validators: [],
            options: 'staffemnu',
            componentTypeList: 'service',
            params: 'ename',
            selector: 'dropFilterStaff',
            events: {
                onShow: 'changeStaffMenuFilter()',
                onFilterChange: 'filterStaffMenu($event)',
                onChange: 'changeStaffMenuSelected($event)',
            },
            dataList: {
                label: 'employeeName',
                titleLabel: 'employeeName',
                value: 'id',
            },
            service: {
                name: 'getStaffList',
                method: 'doPost',
                url: 'asset/enum/empandempid',
            },
            param: 'empid',
        },
    ],
    buttons: [
        {
            label: '',
            tTooltip: '添加',
            click: 'add()',
            icon: 'icon-plus',
            class: 'iconfont ui-button-color-red',
        },
        {
            label: '批量删除',
            icon: 'icon-delete',
            tTooltip: '批量删除',
            click: 'batchDel()',
            disabled: '[disabled]="tabelSelected.length == 0"',
            class: 'btn ui-button-nav',
        },
    ],
    tableHeader: [
        { field: 'assetName', header: '设备名称' },
        { field: 'assetType', header: '设备类型' },
        { field: 'updateTime', header: '修改时间' },
    ],
    tabelOperation: [
        {
            tTooltip: '查看',
            class: 'icon-eye1',
            click: 'see()',
        },
        {
            tTooltip: '修改',
            class: 'icon-edit',
            click: 'edit(rowData)',
        },
    ],
};
export { setting };
