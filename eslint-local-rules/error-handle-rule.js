const util = require('util');

module.exports = {
  create(context) {
    return {
      // createCustomizeMutation must provide retryOptions if errorHandleType is ErrorHandleType.None or ErrorHandleType.Server
      // it is because network error should be handled by retryOptions
      // or developer should define retry behavior
      // fail:
      // createCustomizeMutation({
      //   errorHandleType: ErrorHandleType.None,
      // });
      // success:
      // createCustomizeMutation({
      //   ...retryOptions,
      //   errorHandleType: ErrorHandleType.None,
      // });
      //
      // createCustomizeMutation({
      //   retry: false,
      //   errorHandleType: ErrorHandleType.Server,
      // });
      CallExpression(node) {
        if (node.callee.name === 'createCustomizeMutation' && node.arguments[0].type === 'ObjectExpression') {
          const errorHandleTypeNode = node.arguments?.[0]?.properties?.find(
            (property) => property.key?.name === 'errorHandleType',
          );
          const errorHandleTypeName = errorHandleTypeNode?.value?.property?.name;
          const retryOptionsNode = node.arguments?.[0]?.properties?.find(
            (property) => property.type === 'SpreadElement' && property.argument?.name === 'retryOptions',
          );
          const retryTypeNode = node.arguments?.[0]?.properties?.find((property) => property.key?.name === 'retry');
          if (
            errorHandleTypeNode &&
            (errorHandleTypeName === 'None' || errorHandleTypeName === 'Server') &&
            !retryOptionsNode &&
            !retryTypeNode
          ) {
            context.report({
              node,
              message:
                'createCustomizeMutation must spread retryOptions if errorHandleType is ErrorHandleType.None or ErrorHandleType.Server',
            });
          }
        }
      },
    };
  },
};
