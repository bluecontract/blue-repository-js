export const CdmProductAssetFloatingrateFloatingRateProcessingParameters: Record<
  string,
  unknown
> = {
  capRate: {
    description: 'capt to be applied to the floating rate.',
    type: {
      blueId: '9eWaHYz2vKrFofdHTHAizNNu8xP6QE3WQ5y7DGrGZvyJ',
    },
  },
  description:
    'Type to hold the processing parameters that should be or were used to calculate a floating amount.  These parameters can vary over a schedule so this type holds the acutal values applicable to this calculation.\n',
  floorRate: {
    description: 'floor to be applied to the floating rate.',
    type: {
      blueId: '9eWaHYz2vKrFofdHTHAizNNu8xP6QE3WQ5y7DGrGZvyJ',
    },
  },
  initialRate: {
    description: 'The rate to be applied for the initial period.',
    type: {
      blueId: 'GLmQaa2vVZKjaht1sNMcUL55xfAgWQxpj5ENxwvVRvsm',
    },
  },
  multiplier: {
    description: 'floating rate multiplier.',
    type: {
      blueId: '9eWaHYz2vKrFofdHTHAizNNu8xP6QE3WQ5y7DGrGZvyJ',
    },
  },
  name: 'cdm/product/asset/floatingrate/FloatingRateProcessingParameters',
  negativeTreatment: {
    description: 'How to handle negative interest rates.',
    type: {
      blueId: 'BsWNiWBWBcPvxq7gbRKXCVo4xpJ1fYXPvWNafB7Bvxzt',
    },
  },
  rounding: {
    description: 'THe final rate rounding to be applied.',
    type: {
      blueId: 'BYetgNwutc7xjHHx9g7ZhsdKgyGYMd1UR4jDoHHafJHj',
    },
  },
  spread: {
    description: 'spread to be added to the floating rate.',
    type: {
      blueId: '9eWaHYz2vKrFofdHTHAizNNu8xP6QE3WQ5y7DGrGZvyJ',
    },
  },
  treatment: {
    description:
      'US rate treatment (Bond Equivalent Yield or Money Market Yield, if applicable.',
    type: {
      blueId: '6vYpwpDGdaR6pbtzmJTTxmLwiWsbwBhhaiecmRbLMtix',
    },
  },
};
