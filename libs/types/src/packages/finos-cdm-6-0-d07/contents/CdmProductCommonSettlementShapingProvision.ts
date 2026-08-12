export const CdmProductCommonSettlementShapingProvision: Record<
  string,
  unknown
> = {
  description:
    "Defines the applicable settlement limits that may require a settlement to be 'shaped', i.e. broken-down into smaller amounts.\n",
  name: 'cdm/product/common/settlement/ShapingProvision',
  shapeSchedule: {
    description: 'Defines applicable settlement limits in each currency.',
    itemType: {
      blueId: 'A6JZXX4Rug3aj7cJh48V6FeziSECwFQzyrJ1xUwd9kii',
    },
    schema: {
      minItems: 1,
    },
    type: {
      blueId: '8DSFoWG9MqRSUhStqoPLrwVQiYByRh18NWbDEarN8MKF',
    },
  },
};
