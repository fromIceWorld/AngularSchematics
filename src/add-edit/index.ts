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
import { setting } from './setting/index';
// You don't have to export the function as default. You can also have more than one rule factory
// per file.
export function addEdit(_options: any): Rule {
    return (tree: Tree, _context: SchematicContext) => {
        // 获取到在angular cli工作区下的 路径和要生成的组件 前缀name
        const { name, path } = setting;

        // 读取模板文件
        const sourceTemplates = url('./files');

        // 应用模板文件
        const sourceParametrizedTemplates = apply(sourceTemplates, [
            applyTemplates({
                ...setting,
                ...strings,
                name,
            }),
            move(path),
        ]);
        console.log(mergeWith(sourceParametrizedTemplates)(tree, _context));

        // 将传入的值(option)与模板文件合并(传入值替代模板变量值)
        return mergeWith(sourceParametrizedTemplates)(tree, _context);
    };
}
