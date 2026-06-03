export const CdmBaseStaticdataPartyNaturalPersonRole: Record<string, unknown> =
  {
    description:
      'A class to specify the role(s) that natural person(s) may have in relation to the contract.',
    name: 'cdm/base/staticdata/party/NaturalPersonRole',
    personReference: {
      description:
        'A reference to the natural person to whom the role refers to.',
      schema: {
        required: true,
      },
      type: {
        blueId: 'AqRajqKToreHabAHCgT66Zc87qk24EdQSawSThmGb9Eu',
      },
    },
    role: {
      description:
        'FpML specifies a person role that is distinct from the party role.',
      itemType: {
        blueId: '9rvLaroTfdZSpfMcA8dBg3zpJu9MmRcN4mqeMUJpWPZB',
      },
      schema: {
        minItems: 0,
      },
      type: {
        blueId: '8DSFoWG9MqRSUhStqoPLrwVQiYByRh18NWbDEarN8MKF',
      },
    },
  };
