export const CdmProductAssetValuationTerms = {
  componentSecurityIndexAnnexFallback: {
    description:
      'For an index option transaction, a flag to indicate whether a relevant Component Security Index Annex is applicable to the transaction.\n',
    type: {
      blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
    },
  },
  dividendValuationDates: {
    description: 'Specifies the dividend valuation dates of the swap.',
    type: {
      blueId: 'Cpbn2utZQopvuh7pdxe4hrg9S6CvTTqwa6hLYZRihZRr',
    },
  },
  fPVFinalPriceElectionFallback: {
    description:
      'Specifies the fallback provisions for Hedging Party in the determination of the Final Price.',
    type: {
      blueId: 'EzG7sUjQ1nt9FsGH9rGXPtygd5B7hpbtNNK57CxGS247',
    },
  },
  futuresPriceValuation: {
    description:
      'The official settlement price as announced by the related exchange is applicable, in accordance with the ISDA 2002 definitions.\n',
    type: {
      blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
    },
  },
  multipleExchangeIndexAnnexFallback: {
    description:
      'For an index option transaction, a flag to indicate whether a relevant Multiple Exchange Index Annex is applicable to the transaction. This annex defines additional provisions which are applicable where an index is comprised of component securities that are traded on multiple exchanges.\n',
    type: {
      blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
    },
  },
  name: 'cdm/product/asset/ValuationTerms',
  numberOfValuationDates: {
    description:
      'The number of valuation dates between valuation start date and valuation end date.',
    type: {
      blueId: '5WNMiV9Knz63B4dVY5JtMyh3FB4FSGqv7ceScvuapdE1',
    },
  },
  optionsPriceValuation: {
    description:
      'The official settlement price as announced by the related exchange is applicable, in accordance with the ISDA 2002 definitions\n',
    type: {
      blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
    },
  },
} as const;
