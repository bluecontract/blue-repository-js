export const CdmLegaldocumentationCommonAddressForNotices: Record<
  string,
  unknown
> = {
  additionalNotices: {
    description:
      'The optional specification of additional information when a party requires notices to be delivered to more than one address.\n',
    itemType: {
      blueId: '8otMB7Qhn3fyzdqcuRMH14nKuDGiaWnjVXn45TJ7SBLR',
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
      blueId: '9TmPYroGmuj6v7x9aMMV97Hqg4a4xhW19VqhcavbmgRL',
    },
  },
};
