export const CdmBaseStaticdataPartyNaturalPersonRole = {
  description:
    'A class to specify the role(s) that natural person(s) may have in relation to the contract.',
  name: 'cdm/base/staticdata/party/NaturalPersonRole',
  personReference: {
    description:
      'A reference to the natural person to whom the role refers to.',
    schema: {
      required: {
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
        value: true,
      },
    },
    type: {
      blueId: '8Trmrr2auNXC1rSUVpofHGpAnufdc2zUsGwJ1Jx44Cp6',
    },
  },
  role: {
    description:
      'FpML specifies a person role that is distinct from the party role.',
    itemType: {
      blueId: '8We3ifRCJDJwmBVXuSehPTJrLYivWwUDmGZ6pd5yqKLF',
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
