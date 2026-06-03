export const CdmProductCollateralEligibleCollateralSpecification: Record<
  string,
  unknown
> = {
  counterparty: {
    description:
      'Specification of the roles of the counterparties to the specification.',
    itemType: {
      blueId: '58TeStN7sJrzoG3o1U7FZq3fFkxbCXkvdWPYYZkf1r3x',
    },
    schema: {
      maxItems: 2,
      minItems: 0,
    },
    type: {
      blueId: '8DSFoWG9MqRSUhStqoPLrwVQiYByRh18NWbDEarN8MKF',
    },
  },
  criteria: {
    description:
      'Represents a set of criteria used to specify eligible collateral.',
    itemType: {
      blueId: '3GcdhwSwCmcXjxmxraErSqcv6hktXM5krtm5PeusABq6',
    },
    schema: {
      minItems: 1,
    },
    type: {
      blueId: '8DSFoWG9MqRSUhStqoPLrwVQiYByRh18NWbDEarN8MKF',
    },
  },
  description:
    'Represents a set of criteria used to specify eligible collateral.',
  identifier: {
    description:
      'Specifies the identifier(s) to uniquely identify eligible collateral or a set of eligible collateral, such as a schedule or equivalant for an identity issuer.\n',
    itemType: {
      blueId: '9tpFoqFu1yX5LZEATGF8CYsE5VSXhkQua9LMXwLEX2Pv',
    },
    schema: {
      minItems: 0,
    },
    type: {
      blueId: '8DSFoWG9MqRSUhStqoPLrwVQiYByRh18NWbDEarN8MKF',
    },
  },
  name: 'cdm/product/collateral/EligibleCollateralSpecification',
  party: {
    description: 'The parties associated with the specification.',
    itemType: {
      blueId: '3skPfLDtYJ59SZAAdcu2JDHySdtCEVu8FzTnUX8D5mfy',
    },
    schema: {
      maxItems: 2,
      minItems: 0,
    },
    type: {
      blueId: '8DSFoWG9MqRSUhStqoPLrwVQiYByRh18NWbDEarN8MKF',
    },
  },
  partyRole: {
    description:
      'Specifies the role(s) that each of the party(s) is playing in the context of the specification, eg Payor or Receiver.\n',
    itemType: {
      blueId: 'Hrt2EoYJokASG9J62NMKWt8UZbQN6BwtESp7hVDVQYvm',
    },
    schema: {
      minItems: 0,
    },
    type: {
      blueId: '8DSFoWG9MqRSUhStqoPLrwVQiYByRh18NWbDEarN8MKF',
    },
  },
};
