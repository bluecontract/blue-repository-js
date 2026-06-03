export const CdmObservableAssetMultipleCreditNotations: Record<
  string,
  unknown
> = {
  condition: {
    description:
      'An enumerated element, to qualify whether All or Any credit notation applies.',
    schema: {
      required: true,
    },
    type: {
      blueId: '5AmXPpNccrpoL5H4BBSk9y2QfnizHY6JKgXqaHJTHgvy',
    },
  },
  creditNotation: {
    description: 'At least two credit notations much be specified.',
    itemType: {
      blueId: '3a31df2HdfB7EqRbM2D5wwBaTaVC1tUemQ66F91P16xS',
    },
    schema: {
      minItems: 2,
    },
    type: {
      blueId: '8DSFoWG9MqRSUhStqoPLrwVQiYByRh18NWbDEarN8MKF',
    },
  },
  description:
    "Represetns a class to specify multiple credit notations alongside a conditional 'any' or 'all' qualifier.",
  mismatchResolution: {
    type: {
      blueId: 'DRzBA7DNKGx3x57DdS7v8C2BBHL55ia9a7Sqzx7r5Qr7',
    },
  },
  name: 'cdm/observable/asset/MultipleCreditNotations',
  referenceAgency: {
    type: {
      blueId: 'D1H3C3xAMJv2XQNBYfethSUKDH7kngUkefwbzLwVLW1i',
    },
  },
};
