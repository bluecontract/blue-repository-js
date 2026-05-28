export const CdmProductCommonSettlementShapingProvision = {
  description:
    "Defines the applicable settlement limits that may require a settlement to be 'shaped', i.e. broken-down into smaller amounts.\n",
  name: 'cdm/product/common/settlement/ShapingProvision',
  shapeSchedule: {
    description: 'Defines applicable settlement limits in each currency.',
    itemType: {
      blueId: '5RCy7NwpdTs7j96evsc93hof8nESXDM5u4q3ykG6dXvE',
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
} as const;
