export const setting = {
    forPage: 'test-template',
    path: 'src/app/ofmodules/test-template/component',
    name: 'popup',
    title: '新增/编辑',
    formPrams: 'formPrams',
    inputs: [
        {
            label: '组件名称',
            type: 'text',
            formControlName: 'componentName',
            initValue: '',
            validators: [
                {
                    name: 'Validators.required',
                    tip: '请输入组件名称',
                    errorType: 'required',
                },
                {
                    name: 'this.validate.ports()',
                    tip: '请输入正确的组件格式',
                    errorType: 'error',
                },
            ],
            updateOn: 'blur',
            param: 'componentName',
        },
        {
            label: '组件类型',
            type: 'dropdown',
            mode: 'normal',
            formControlName: 'componentType',
            initValue: '',
            validators: [],
            options: 'componentTypeList',
            componentTypeList: [
                {
                    label: '普通组件',
                    value: '0',
                },
                {
                    label: '基础组件',
                    value: '1',
                },
            ],
            param: 'componentType',
        },
        {
            label: '员工',
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
            service: 'getStaffList',
            http: {
                url: 'asset/enum/empandempid',
                type: 'doGet',
            },
            param: 'empid',
        },
    ],
};
