export const CdmLegaldocumentationCommonUmbrellaAgreement = {
  description:
    'A class to specify a set of legal entities which are part of a legal agreement beyond the two contracting parties to that agreement. This data representation reflects the ISDA Create representation.\n',
  isApplicable: {
    description:
      'The determination of whether Umbrella Agreement terms are Applicable (True), or Not Applicable (False)',
    schema: {
      required: {
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
        value: true,
      },
    },
    type: {
      blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
    },
  },
  language: {
    description:
      'The language associated with the umbrella agreement, and which applies to all the parties to the umbrella agreement.\n',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  name: 'cdm/legaldocumentation/common/UmbrellaAgreement',
  parties: {
    description: 'Underlying principals to the umbrella agreement.',
    itemType: {
      blueId: 'Ay8eESfxaGKpwyCsv1ZCC9QedmfPTNyL3FGU7pBYVEXM',
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
} as const;
