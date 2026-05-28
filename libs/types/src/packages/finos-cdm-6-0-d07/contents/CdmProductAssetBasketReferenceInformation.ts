export const CdmProductAssetBasketReferenceInformation = {
  basketId: {
    description: 'A CDS basket identifier.',
    itemType: {
      blueId: 'F5GfdsSNcjLAm9anbfMQqxdxAFonErhU5UXFbQzq1zXY',
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
  basketName: {
    description:
      'The name of the basket expressed as a free format string. FpML does not define usage rules for this element.',
    type: {
      blueId: 'F5GfdsSNcjLAm9anbfMQqxdxAFonErhU5UXFbQzq1zXY',
    },
  },
  description: 'CDS Basket Reference Information.',
  mthToDefault: {
    description:
      'M th reference obligation to default to allow representation of N th to M th defaults.',
    type: {
      blueId: '5WNMiV9Knz63B4dVY5JtMyh3FB4FSGqv7ceScvuapdE1',
    },
  },
  name: 'cdm/product/asset/BasketReferenceInformation',
  nthToDefault: {
    description: 'N th reference obligation to default triggers payout.',
    type: {
      blueId: '5WNMiV9Knz63B4dVY5JtMyh3FB4FSGqv7ceScvuapdE1',
    },
  },
  referencePool: {
    description:
      'This element contains all the reference pool items to define the reference entity and reference obligation(s) in the basket.\n',
    schema: {
      required: {
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
        value: true,
      },
    },
    type: {
      blueId: '9FLEZ3hoqXBNGzWS96voDe9xUfnPW3V6ah4Rf5UuethY',
    },
  },
  tranche: {
    description: 'This element contains CDS tranche terms.',
    type: {
      blueId: 'AzjDeg6NcvxKrLxiwH4AdjVNhMtWHj2BHfTGYmY7NVrP',
    },
  },
} as const;
