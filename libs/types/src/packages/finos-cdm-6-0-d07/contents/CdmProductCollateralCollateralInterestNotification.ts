export const CdmProductCollateralCollateralInterestNotification: Record<
  string,
  unknown
> = {
  description:
    'Represents the parameters describing when notifications should be made for required collateral interest transfers.\n',
  name: 'cdm/product/collateral/CollateralInterestNotification',
  notificationDayType: {
    description: 'The type of days on which notification should occur.',
    schema: {
      required: true,
    },
    type: {
      blueId: 'EPBWZ9jBx984Q99bnqB2NAqBTKrAr4mJWCYnwcFgnivq',
    },
  },
  notificationTime: {
    description:
      'Specifies the time of day that the notification should occur.',
    schema: {
      required: true,
    },
    type: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
  },
  offset: {
    description:
      'Specifies the number of days before (negative) or after (positive) the trigger event.',
    schema: {
      required: true,
    },
    type: {
      blueId: '9eWaHYz2vKrFofdHTHAizNNu8xP6QE3WQ5y7DGrGZvyJ',
    },
  },
  trigger: {
    description:
      'Specifies what triggers notification (should be enum) Interest Statement Frequency, Period End Date.',
    schema: {
      required: true,
    },
    type: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
  },
};
