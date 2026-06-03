export const CdmObservableAssetCalculatedrateFloatingRateCalculationParameters: Record<
  string,
  unknown
> = {
  applicableBusinessDays: {
    description: 'the business days that are applicable for the calculation.',
    type: {
      blueId: 'H53mV1d8rMzhefLZH8WzGchozyQA28cbwNpBHGmVA9ti',
    },
  },
  calculationMethod: {
    description: 'calculation type (averaging or compounding).',
    schema: {
      required: true,
    },
    type: {
      blueId: '5noQvmG1G1xXrG8SxnbN37mhXkXDttDg7VNkk4vHoTMt',
    },
  },
  description:
    'Defines the structures needed to represent the calculation parameters for daily averaged and compounded modular rates as defined in the 2021 ISDA Definitions in Section 7. This type is used to represent modular computed rates in interestRatePayouts.\n',
  lockoutCalculation: {
    description: 'any lockout  parameters if applicable.',
    type: {
      blueId: 'FNvJ5Bykw9Ak2JRJJJ1nizpUFbufUY7ciCjGoMLUAQzA',
    },
  },
  lookbackCalculation: {
    description: 'any lookback  parameters if applicable.',
    type: {
      blueId: 'FNvJ5Bykw9Ak2JRJJJ1nizpUFbufUY7ciCjGoMLUAQzA',
    },
  },
  name: 'cdm/observable/asset/calculatedrate/FloatingRateCalculationParameters',
  observationParameters: {
    description:
      'any applicable observation parameters, such as daily caps or floors.',
    type: {
      blueId: 'DKxKbxnu2Fwsa8UzqKbgTU29eJKTYiwMNoJTqTNZLM6p',
    },
  },
  observationShiftCalculation: {
    description: 'any obervation shift parameters if applicable.',
    type: {
      blueId: '5qPopZ2RMbhbDtd5XmtdT1QCkFussYRLiFeUPqAWCd9a',
    },
  },
};
