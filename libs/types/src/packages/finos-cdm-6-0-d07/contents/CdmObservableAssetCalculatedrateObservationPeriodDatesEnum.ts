export const CdmObservableAssetCalculatedrateObservationPeriodDatesEnum: Record<
  string,
  unknown
> = {
  description:
    'The enumerated values to specify whether rate calculations occur relative to the first or last day of a calculation period. Done in uppercase due to a bug in code generation. This enumeration is used to represent the definitions of modular calculated rates as described in the 2021 ISDA Definitions, section 7.\n',
  name: 'cdm/observable/asset/calculatedrate/ObservationPeriodDatesEnum',
  schema: {
    enum: [
      {
        type: {
          blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
        },
        value: 'FixingDate',
      },
      {
        type: {
          blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
        },
        value: 'SetInAdvance',
      },
      {
        type: {
          blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
        },
        value: 'Standard',
      },
    ],
  },
  type: {
    blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
  },
};
