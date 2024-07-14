const { AST_NODE_TYPES } = require('@typescript-eslint/utils');

function createGenericType(arr) {
  return `[${arr.map((x) => `'${x}'`).join(', ')}]`;
}

function arraysAreEqual(a, b) {
  return a.length === b.length && a.every((x, i) => x === b[i]);
}

module.exports = {
  meta: {
    type: 'problem',
    docs: {
      description: 'Check typing for keyList and cb in use:domProperty',
    },
    fixable: 'code',
    schema: [],
  },
  create(context) {
    return {
      JSXNamespacedName(node) {
        // 'use' is very general, put it in second condition check for higher performance
        if (node.name?.name !== 'domProperty' || node.namespace?.name !== 'use') return;

        const jsxAttribute = node.parent;
        const expression = jsxAttribute.value?.expression;

        if (expression?.type !== AST_NODE_TYPES.ObjectExpression) {
          return;
        }

        const properties = expression.properties;
        const keyList = properties.find((x) => x.key.name === 'keyList');
        const cb = properties.find((x) => x.key.name === 'cb');

        if (
          !keyList ||
          !cb ||
          keyList.value.type !== AST_NODE_TYPES.ArrayExpression ||
          !keyList.value.elements.every((x) => x.type === AST_NODE_TYPES.Literal)
        ) {
          return;
        }

        const isInlineFunc =
          cb.value.type === AST_NODE_TYPES.ArrowFunctionExpression ||
          cb.value.type === AST_NODE_TYPES.FunctionExpression;

        let cbFunc = isInlineFunc ? cb.value : undefined;

        if (!isInlineFunc && cb.value.type === 'Identifier') {
          const variable = context.getScope().variables.find((x) => x.name === cb.value.name);
          if (variable?.defs?.[0]) {
            const funcNode = variable.defs[0].node.init;
            if (!funcNode) return;
            if (
              funcNode.type === AST_NODE_TYPES.ArrowFunctionExpression ||
              funcNode.type === AST_NODE_TYPES.FunctionExpression
            ) {
              cbFunc = funcNode;
            }
          }
        }

        if (!cbFunc) {
          return;
        }

        const keyListValue = keyList.value.elements.map((x) => x.value);

        const firstParam = cbFunc.params[0];
        if (!firstParam) {
          // the case of cb: () => void
          return;
        }

        const typeAnnotation = firstParam.typeAnnotation?.typeAnnotation;
        if (!typeAnnotation) {
          // the case of cb: (values) => void
          // without type annotation in params

          const replaceText = `DomPropertyCbParams<${createGenericType(keyListValue)}>`;
          context.report({
            node: isInlineFunc ? firstParam : cb.value,
            message: `Please explicitly specify the type as ${replaceText}`,
            fix: isInlineFunc ? (fixer) => fixer.insertTextAfter(firstParam, `: ${replaceText}`) : undefined,
          });

          return;
        }

        if (
          typeAnnotation.type !== AST_NODE_TYPES.TSTypeReference ||
          typeAnnotation.typeName.name !== 'DomPropertyCbParams'
        ) {
          // the case of specify the type other than DomPropertyCbParams
          // such as cb: (values: number[]) => void

          const replaceText = `DomPropertyCbParams<${createGenericType(keyListValue)}>`;
          context.report({
            node: isInlineFunc ? typeAnnotation : cb.value,
            message: `Please explicitly specify the type as ${replaceText}`,
            fix: isInlineFunc ? (fixer) => fixer.replaceText(typeAnnotation, replaceText) : undefined,
          });

          return;
        }

        const curGenericType = typeAnnotation.typeParameters?.params[0];

        if (!curGenericType) {
          // the case of cb: (values: DomPropertyCbParams) => void
          // no need to consider this case as typescript will throw error
          return;
        }

        if (
          curGenericType.type === AST_NODE_TYPES.TSTupleType &&
          curGenericType.elementTypes.every((x) => x.type === AST_NODE_TYPES.TSLiteralType)
        ) {
          const tupleElements = curGenericType.elementTypes.map((x) => x.literal.value);

          if (!arraysAreEqual(tupleElements, keyListValue)) {
            context.report({
              node: isInlineFunc ? curGenericType : cb.value,
              message: 'genetic type of DomPropertyCbParams does not match with keyList',
              fix: isInlineFunc
                ? (fixer) => fixer.replaceText(curGenericType, createGenericType(keyListValue))
                : undefined,
            });
          }
        }
      },
    };
  },
};
