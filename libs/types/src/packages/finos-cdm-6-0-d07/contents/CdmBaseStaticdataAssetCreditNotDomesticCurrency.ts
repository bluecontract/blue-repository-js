export const CdmBaseStaticdataAssetCreditNotDomesticCurrency = {
  applicable: {
    description:
      'Indicates whether the Not Domestic Currency provision is applicable.',
    schema: {
      required: {
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
        value: true,
      },
    },
    type: {
      blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
    },
  },
  currency: {
    description:
      'An explicit specification of the domestic currency. The list of valid currencies is not presently positioned as an enumeration as part of the CDM because that scope is limited to the values specified by ISDA and FpML. As a result, implementers have to make reference to the relevant standard, such as the ISO 4217 standard for currency codes.\n',
    type: {
      blueId: 'F5GfdsSNcjLAm9anbfMQqxdxAFonErhU5UXFbQzq1zXY',
    },
  },
  description:
    'A class to specify the ISDA 2003 Term: Not Domestic Currency.\n',
  name: 'cdm/base/staticdata/asset/credit/NotDomesticCurrency',
} as const;
