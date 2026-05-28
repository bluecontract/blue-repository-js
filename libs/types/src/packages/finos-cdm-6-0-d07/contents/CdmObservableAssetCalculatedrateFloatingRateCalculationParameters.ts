export const CdmObservableAssetCalculatedrateFloatingRateCalculationParameters =
  {
    applicableBusinessDays: {
      description: 'the business days that are applicable for the calculation.',
      type: {
        blueId: 'AaeaS3nBkqHVJTRb23iTwYjbMyikRz6mRz7L5FdHczSH',
      },
    },
    calculationMethod: {
      description: 'calculation type (averaging or compounding).',
      schema: {
        required: {
          type: {
            blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
          },
          value: true,
        },
      },
      type: {
        blueId: '8Gym5rgFDbWfvgkK1dRFec8LLZbBhsMaKQsfgziFhHan',
      },
    },
    description:
      'Defines the structures needed to represent the calculation parameters for daily averaged and compounded modular rates as defined in the 2021 ISDA Definitions in Section 7. This type is used to represent modular computed rates in interestRatePayouts.\n',
    lockoutCalculation: {
      description: 'any lockout  parameters if applicable.',
      type: {
        blueId: 'As6wv4pz5jg38xpxx4xowPAz7wfQoARSJ7tYUGcEAZSj',
      },
    },
    lookbackCalculation: {
      description: 'any lookback  parameters if applicable.',
      type: {
        blueId: 'As6wv4pz5jg38xpxx4xowPAz7wfQoARSJ7tYUGcEAZSj',
      },
    },
    name: 'cdm/observable/asset/calculatedrate/FloatingRateCalculationParameters',
    observationParameters: {
      description:
        'any applicable observation parameters, such as daily caps or floors.',
      type: {
        blueId: '6e8bWMLWmAugBkofJStEGzazoGnD7NkWaWK1zPbK4zCP',
      },
    },
    observationShiftCalculation: {
      description: 'any obervation shift parameters if applicable.',
      type: {
        blueId: '3Ab8ff8vHj6yZniQHU1kEyVi2DQyjvhXFPTFikY4ayof',
      },
    },
  } as const;
