import { strings } from '@angular-devkit/core';
import {
    apply,
    applyTemplates,
    mergeWith,
    move,
    Rule,
    SchematicContext,
    Tree,
    url,
} from '@angular-devkit/schematics';
import { Schema } from './schema';
import { setting } from './setting';
export function genComponent(_options: Schema): Rule {
    console.log('----------', _options);

    return (tree: Tree, _context: SchematicContext) => {
        // 获取到在angular cli工作区下的 路径和要生成的组件 前缀name
        const { name, path } = setting;
        // 读取模板文件
        const sourceTemplates = url('./files');
        console.log(
            sourceTemplates,
            `----------配置文件-----------\n${JSON.stringify(setting)}`
        );

        // 应用模板文件
        const sourceParametrizedTemplates = apply(sourceTemplates, [
            applyTemplates({
                ...setting,
                ...strings,
                name,
            }),
            move(path),
        ]);
        // 将传入的值(option)与模板文件合并(传入值替代模板变量值)
        return mergeWith(sourceParametrizedTemplates)(tree, _context);
    };
}
