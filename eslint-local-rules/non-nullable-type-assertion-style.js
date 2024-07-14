const tsutils = require('ts-api-utils');
const ts = require('typescript');
const { ESLintUtils } = require('@typescript-eslint/utils');

module.exports = {
  meta: {
    docs: {
      description: 'Enforce non-null assertions over explicit type casts',
    },
    messages: {
      preferNonNullAssertion: 'Use a ! assertion to more succinctly remove null and undefined from the type.',
    },
    schema: [],
    type: 'suggestion',
  },
  defaultOptions: [],

  create(context) {
    const services = ESLintUtils.getParserServices(context);

    const getTypesIfNotLoose = (node) => {
      const type = services.getTypeAtLocation(node);

      if (tsutils.isTypeFlagSet(type, ts.TypeFlags.Any | ts.TypeFlags.Unknown)) {
        return undefined;
      }

      return tsutils.unionTypeParts(type);
    };

    const couldBeNullish = (type) => {
      if (type.flags & ts.TypeFlags.TypeParameter) {
        const constraint = type.getConstraint();
        return constraint == null || couldBeNullish(constraint);
      } else if (tsutils.isUnionType(type)) {
        for (const part of type.types) {
          if (couldBeNullish(part)) {
            return true;
          }
        }
        return false;
      }
      return (type.flags & (ts.TypeFlags.Null | ts.TypeFlags.Undefined)) !== 0;
    };

    const sameTypeWithoutNullish = (assertedTypes, originalTypes) => {
      const nonNullishOriginalTypes = originalTypes.filter(
        (type) => (type.flags & (ts.TypeFlags.Null | ts.TypeFlags.Undefined)) === 0,
      );

      if (nonNullishOriginalTypes.length === originalTypes.length) {
        return false;
      }

      for (const assertedType of assertedTypes) {
        if (couldBeNullish(assertedType) || !nonNullishOriginalTypes.includes(assertedType)) {
          return false;
        }
      }

      for (const originalType of nonNullishOriginalTypes) {
        if (!assertedTypes.includes(originalType)) {
          return false;
        }
      }

      return true;
    };

    const isConstAssertion = (node) => {
      return (
        node.typeAnnotation.type === 'TSTypeReference' &&
        node.typeAnnotation.typeName.type === 'Identifier' &&
        node.typeAnnotation.typeName.name === 'const'
      );
    };

    return {
      'TSAsExpression, TSTypeAssertion'(node) {
        if (isConstAssertion(node)) {
          return;
        }

        const originalTypes = getTypesIfNotLoose(node.expression);
        if (!originalTypes) {
          return;
        }

        const assertedTypes = getTypesIfNotLoose(node.typeAnnotation);
        if (!assertedTypes) {
          return;
        }

        if (sameTypeWithoutNullish(assertedTypes, originalTypes)) {
          context.report({
            messageId: 'preferNonNullAssertion',
            node,
          });
        }
      },
    };
  },
};
