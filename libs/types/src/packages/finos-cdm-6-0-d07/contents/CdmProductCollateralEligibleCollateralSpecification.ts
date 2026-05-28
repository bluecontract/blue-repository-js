export const CdmProductCollateralEligibleCollateralSpecification = {
  counterparty: {
    description:
      'Specification of the roles of the counterparties to the specification.',
    itemType: {
      blueId: '3xDGPtjud4dCVNF9Swm1X7WoCse6gMziwHGvUnp1h3EK',
    },
    schema: {
      maxItems: {
        type: {
          blueId: '5WNMiV9Knz63B4dVY5JtMyh3FB4FSGqv7ceScvuapdE1',
        },
        value: 2,
      },
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
  criteria: {
    description:
      'Represents a set of criteria used to specify eligible collateral.',
    itemType: {
      blueId: '4wYLbmNHssjvkRwDS66pb73SsDArUAfMW2BHtj2dZEkZ',
    },
    schema: {
      minItems: {
        type: {
          blueId: '5WNMiV9Knz63B4dVY5JtMyh3FB4FSGqv7ceScvuapdE1',
        },
        value: 1,
      },
    },
    type: {
      blueId: '6aehfNAxHLC1PHHoDr3tYtFH3RWNbiWdFancJ1bypXEY',
    },
  },
  description:
    'Represents a set of criteria used to specify eligible collateral.',
  identifier: {
    description:
      'Specifies the identifier(s) to uniquely identify eligible collateral or a set of eligible collateral, such as a schedule or equivalant for an identity issuer.\n',
    itemType: {
      blueId: '8eDineGwQr2VXBeVEPbnJZvEcNhDbLu8HtmubDT6RBoZ',
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
  name: 'cdm/product/collateral/EligibleCollateralSpecification',
  party: {
    description: 'The parties associated with the specification.',
    itemType: {
      blueId: '694bqGLce4g9XrBubcFXs81gNNsvVTGK3msPSdNsj5jD',
    },
    schema: {
      maxItems: {
        type: {
          blueId: '5WNMiV9Knz63B4dVY5JtMyh3FB4FSGqv7ceScvuapdE1',
        },
        value: 2,
      },
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
  partyRole: {
    description:
      'Specifies the role(s) that each of the party(s) is playing in the context of the specification, eg Payor or Receiver.\n',
    itemType: {
      blueId: '8fXEqMXsnZAuwSFKfhiksmAPnV7yvaxSbmwgTbGrN75M',
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
