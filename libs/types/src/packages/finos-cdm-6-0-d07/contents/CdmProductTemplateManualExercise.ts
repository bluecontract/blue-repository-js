export const CdmProductTemplateManualExercise = {
  description:
    'A class defining manual exercise, i.e. that the option buyer counterparty must give notice to the option seller of exercise.\n',
  exerciseNotice: {
    description:
      'Definition of the party to whom notice of exercise should be given.',
    type: {
      blueId: 'DRzHnd5fFvvt3FAGunPM7qFcwB1KgFPJn8D7zyBankMz',
    },
  },
  fallbackExercise: {
    description:
      'If fallback exercise is specified then the notional amount of the underlying swap, not previously exercised under the swaption, will be automatically exercised at the expiration time on the expiration date if at such time the buyer is in-the-money, provided that the difference between the settlement rate and the fixed rate under the relevant underlying swap is not less than one tenth of a percentage point (0.10% or 0.001). The term in-the-money is assumed to have the meaning defined in the 2000 ISDA Definitions, Section 17.4. In-the-money.\n',
    type: {
      blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
    },
  },
  name: 'cdm/product/template/ManualExercise',
} as const;
