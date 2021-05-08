const setting: any = {
    name: 'test-template',
    path: 'src/app/ofmodules/test-template',
    search: [
        {
            inputType: 'text',
            label: '组织编号',
            ngModel: 'orgNum',
            dataType: 'string',
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
            class: 'btn ui-button-nav',
        },
        {
            label: '下载模板',
            tTooltip: '下载模板',
            click: 'downLoad()',
            class: 'btn ui-button-nav',
        },
        {
            label: '导入',
            tTooltip: '导入',
            icon: 'icon-download',
            click: 'import()',
            class: 'btn ui-button-nav',
        },
    ],
    tableHeader: [
        { field: 'orgNumber', header: '组织编号' },
        { field: 'orgName', header: '组织名称' },
        { field: 'orgType', header: '组织类型' },
        { field: 'email', header: '组织邮箱' },
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
            click: 'edit()',
        },
    ],
};
export { setting };
