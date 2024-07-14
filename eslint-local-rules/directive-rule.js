module.exports = {
  create(context) {
    return {
      // if the node is a import declaration
      // and the import path is '@utilities/directives'
      // report error if imported function is not called as parameter of registerDirective
      // Fail:
      // import { foo } from '@utilities/directives'
      // Pass:
      // import { foo } from '@utilities/directives'
      // registerDirective(foo)
      JSXAttribute(node) {
        const nameNode = node.name && node.name.name;
        if (nameNode.type !== 'JSXIdentifier' || nameNode.parent?.namespace?.name !== 'use') {
          return;
        }
        const directiveName = nameNode.name; // remove 'use:' prefix
        const sourceCode = context.getSourceCode();
        const importDeclaration = sourceCode.ast.body.find(
          (node) =>
            (node.type === 'ImportDeclaration' &&
              node.source.value?.includes('@utilities/directives') &&
              node.specifiers.some(
                (specifier) => specifier.type === 'ImportSpecifier' && specifier.imported?.name === directiveName,
              )) ||
            (node.type === 'ImportDeclaration' &&
              directiveName === 'sortable' &&
              node.source.value?.includes('@thisbeyond/solid-dnd')),
        );

        if (!importDeclaration) {
          context.report({
            node,
            message: `The directive ${directiveName} is not imported from '@utilities/directives'`,
          });
          return;
        }

        const callExpressions = context
          .getSourceCode()
          .ast.body.filter((node) => node.type === 'ExpressionStatement' && node.expression.type === 'CallExpression')
          .map((node) => node.expression);

        const hasRegisterDirective = callExpressions.some(
          (callExpression) =>
            callExpression.callee.name === 'registerDirective' &&
            callExpression.arguments.length > 0 &&
            callExpression.arguments[0].name === directiveName,
        );

        if (!hasRegisterDirective && directiveName !== 'sortable') {
          context.report({
            node,
            message: `The imported directive ${directiveName} should be called as parameter of registerDirective`,
          });
        }
      },
    };
  },
};
