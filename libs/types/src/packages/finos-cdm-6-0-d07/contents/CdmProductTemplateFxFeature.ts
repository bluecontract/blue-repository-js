export const CdmProductTemplateFxFeature: Record<string, unknown> = {
  composite: {
    description:
      "If 'Composite' is specified as the Settlement Type in the relevant Transaction Supplement, an amount in the Settlement Currency, determined by the Calculation Agent as being equal to the number of Options exercised or deemed exercised, multiplied by: (Settlement Price – Strike Price) / (Strike Price – Settlement Price) x Multiplier provided that if the above is equal to a negative amount the Option Cash Settlement Amount shall be deemed to be zero.\n",
    type: {
      blueId: 'DCnYs1WEp3CCC7chsbsbVHV4Z3Lc4szZSdG7Cp5A3DfU',
    },
  },
  crossCurrency: {
    description:
      "If 'Cross-Currency' is specified as the Settlement Type in the relevant Transaction Supplement, an amount in the Settlement Currency, determined by the Calculation Agent as being equal to the number of Options exercised or deemed exercised, multiplied by: (Settlement Price – Strike Price) / (Strike Price – Settlement Price) x Multiplier x one unit of the Reference Currency converted into an amount in the Settlement Currency using the rate of exchange of the Settlement Currency as quoted on the Reference Price Source on the Valuation Date, provided that if the above is equal to a negative amount the Option Cash Settlement Amount shall be deemed to be zero.\n",
    type: {
      blueId: 'DCnYs1WEp3CCC7chsbsbVHV4Z3Lc4szZSdG7Cp5A3DfU',
    },
  },
  description: 'A type for defining FX Features.',
  name: 'cdm/product/template/FxFeature',
  quanto: {
    description:
      "If 'Quanto' is specified as the Settlement Type in the relevant Transaction Supplement, an amount, as determined by the Calculation Agent in accordance with the Section 8.2 of the Equity Definitions.\n",
    type: {
      blueId: 'Hkq47ArK1FdesDuspFiSZKL2AMTNWMyH2tNfymLamXvR',
    },
  },
  referenceCurrency: {
    description: 'Specifies the reference currency of the trade.',
    schema: {
      required: true,
    },
    type: {
      blueId: 'HTDqFgte5VF88dLHnCZMjvyetfxfTAKxf9r8ciErE7Vg',
    },
  },
};
