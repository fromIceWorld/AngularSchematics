import { strings } from '@angular-devkit/core';
import {
    apply,
    applyTemplates,
    mergeWith,
    move,
    Rule,
    SchematicContext,
    SchematicsException,
    Tree,
    url,
} from '@angular-devkit/schematics';
import { Schema } from './schema';

export function genComponent(_options: Schema): Rule {
    return (tree: Tree, _context: SchematicContext) => {
        console.log(tree);
        // 获取到在angular cli工作区下的 路劲和要生成的组件 前缀name
        const { name, path } = getParsePath(tree);

        // 读取模板文件
        const sourceTemplates = url('./files');

        // 应用模板文件
        const sourceParametrizedTemplates = apply(sourceTemplates, [
            applyTemplates({
                ..._options,
                ...strings,
                name,
            }),
            move(path),
        ]);

        // 将传入的值(option)与模板文件合并(传入值替代模板变量值)
        return mergeWith(sourceParametrizedTemplates)(tree, _context);
    };
}

function getParsePath(tree: Tree): any {
    // 读取angular.json文件并存为buffer
    const workspaceConfigBuffer = tree.read('angular.json');

    // 判断是不是在一个angular-cli工作区
    if (!workspaceConfigBuffer) {
        throw new SchematicsException(
            '不在angular cli工作区,请在angular项目中执行!'
        );
    }

    // 读取并整理angular配置
    // const workspaceConfig = JSON.parse(workspaceConfigBuffer.toString());
    // 有传入project属性或者是默认project
    // const projectName = workspaceConfig.defaultProject;
    // 获取project定义
    // const project = workspaceConfig.projects[projectName];

    // 获取默认project路径
    // const defaultProjectPath = projectTargets.buildDefaultPath(project);

    // parseName()可以把路径和文件名拆开,取得path和name
    // 例如 src/feartures/login,会被拆分为 path:src/features 和 name:login
    // const parsePath = parseName('src/', options.name);

    return { name: 'can', path: 'src/' };
}
