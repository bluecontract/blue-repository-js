export const CdmObservableAssetValuationMethod: Record<string, unknown> = {
  cashCollateralValuationMethod: {
    description:
      'Specifies the parameters representing several mid-market valuation and replacement value methods.',
    type: {
      blueId: '6C5T6HNc1xggFbuGGNXtXJ2qeiBiqRvHGvNJdJA3sW6q',
    },
  },
  description:
    'Specifies the parameters required to obtain a valuation, including the source, quotation method (bid, mid etc.) and any applicable quotation amount.\n',
  minimumQuotationAmount: {
    description:
      'In the determination of a cash settlement amount, if weighted average quotations are to be obtained, the minimum quotation amount specifies a minimum intended threshold amount of outstanding principal balance of the reference obligation for which the quote should be obtained. If not specified, the ISDA definitions provide for a fallback amount of the lower of either USD 1,000,000 (or its equivalent in the relevant obligation currency) or the quotation amount. ISDA 2003 Term: Minimum Quotation Amount.\n',
    type: {
      blueId: '7eyr2kXubNSHtLXpHJ9G8NqtmDXLfmDmHQZSkLa9qkyy',
    },
  },
  name: 'cdm/observable/asset/ValuationMethod',
  quotationAmount: {
    description:
      'In the determination of a cash settlement amount, if weighted average quotations are to be obtained, the quotation amount specifies an upper limit to the outstanding principal balance of the reference obligation for which the quote should be obtained. If not specified, the ISDA definitions provide for a fallback amount equal to the floating rate payer calculation amount. ISDA 2003 Term: Quotation Amount.\n',
    type: {
      blueId: '7eyr2kXubNSHtLXpHJ9G8NqtmDXLfmDmHQZSkLa9qkyy',
    },
  },
  quotationMethod: {
    description:
      'The type of price quotations to be requested from dealers when determining the market value of the reference obligation for purposes of cash settlement, or which rate quote is to be observed for a fixing. For example, Bid, Offer, Mid-market or Exercising Party Pays. ISDA 2003 Term: Quotation Method. The meaning of Exercising Party Pays is defined in the 2000 ISDA Definitions, Section 17.2. Certain Definitions Relating to Cash Settlement, paragraph (j).\n',
    type: {
      blueId: '8zos93F6Rp44xvm8FYMXKw5xnQKEUMyY6UNchYmnn968',
    },
  },
  valuationMethod: {
    description:
      'The ISDA defined methodology for determining the final price of the reference obligation for purposes of cash settlement. (ISDA 2003 Term: Valuation Method). For example, Market, Highest etc.\n',
    type: {
      blueId: '9Hdb7PQKx6QSKmvMRcDsHuTCkar1FKjhxc3gFZY4hgWE',
    },
  },
  valuationSource: {
    description:
      'The source for obtaining a valuation. This may come from some information source (e.g. Reuters), from a rate option fixing (e.g. FX fixing for cross-currency settlement), or from a set of reference banks. This is a mandatory attribute as the valuation method relies on one of those sources to be specified.\n',
    schema: {
      required: true,
    },
    type: {
      blueId: 'FCKyQt9cG2gZA2twmB2EjomRWASZunsNMVkfDRtdJCDd',
    },
  },
};
