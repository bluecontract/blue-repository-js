export const CdmLegaldocumentationCommonAddressForNotices: Record<
  string,
  unknown
> = {
  additionalNotices: {
    description:
      'The optional specification of additional information when a party requires notices to be delivered to more than one address.\n',
    itemType: {
      blueId: 'EdgTekD4DSaAbY5B22rL1ks9aiMeJD37ywSxekUgteNf',
    },
    schema: {
      minItems: 0,
    },
    type: {
      blueId: '8DSFoWG9MqRSUhStqoPLrwVQiYByRh18NWbDEarN8MKF',
    },
  },
  description: 'Specification of the address and other details for notices.',
  name: 'cdm/legaldocumentation/common/AddressForNotices',
  primaryNotices: {
    description: 'Specification of primary notice details',
    schema: {
      required: true,
    },
    type: {
      blueId: '2G3a7NgdwHUsNXY8WY6afyVj2ex78kmSBZ7yfp58JGaA',
    },
  },
};
