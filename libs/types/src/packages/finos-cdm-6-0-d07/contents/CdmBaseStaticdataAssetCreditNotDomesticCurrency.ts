export const CdmBaseStaticdataAssetCreditNotDomesticCurrency: Record<
  string,
  unknown
> = {
  applicable: {
    description:
      'Indicates whether the Not Domestic Currency provision is applicable.',
    schema: {
      required: true,
    },
    type: {
      blueId: 'AwvXD961fmnmqcSQhjMA7r15HpVh39cefb6ZTyUz2Fm2',
    },
  },
  currency: {
    description:
      'An explicit specification of the domestic currency. The list of valid currencies is not presently positioned as an enumeration as part of the CDM because that scope is limited to the values specified by ISDA and FpML. As a result, implementers have to make reference to the relevant standard, such as the ISO 4217 standard for currency codes.\n',
    type: {
      blueId: 'HTDqFgte5VF88dLHnCZMjvyetfxfTAKxf9r8ciErE7Vg',
    },
  },
  description:
    'A class to specify the ISDA 2003 Term: Not Domestic Currency.\n',
  name: 'cdm/base/staticdata/asset/credit/NotDomesticCurrency',
};
