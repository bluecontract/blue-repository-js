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
      blueId: 'D6pT9tDvB6nnaNaPVHodxcm2djqTNykgt6VJoD2uDq4M',
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
      blueId: '3S9wGcwziECfCYxsx3JEzQGyA8pisBmmGB1dLPaF4Uz2',
    },
  },
  rounding: {
    description: 'THe final rate rounding to be applied.',
    type: {
      blueId: '7fpTDBDMKH4SNXoiKP77e98Hh5vZkbVGXSEenFEztVuv',
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
      blueId: '4REjFYKmNm3htXXqQK6yYEKdqScJUTN8EYNZpDTYUzRp',
    },
  },
};
