export const CdmLegaldocumentationCommonUmbrellaAgreementEntity = {
  description:
    'A class to specify the legal entities that are part of the umbrella agreement.',
  entityId: {
    description: 'A legal entity identifier (e.g. RED entity code).',
    itemType: {
      blueId: 'F5GfdsSNcjLAm9anbfMQqxdxAFonErhU5UXFbQzq1zXY',
    },
    schema: {
      minItems: {
        type: {
          blueId: '5WNMiV9Knz63B4dVY5JtMyh3FB4FSGqv7ceScvuapdE1',
        },
        value: 0,
      },
    },
    type: {
      blueId: '6aehfNAxHLC1PHHoDr3tYtFH3RWNbiWdFancJ1bypXEY',
    },
  },
  name: 'cdm/legaldocumentation/common/UmbrellaAgreementEntity',
  terms: {
    description:
      'The terms that might be associated with each party to the umbrella agreement.',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
} as const;
