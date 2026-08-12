export const CdmBaseDatetimeBusinessCenters: Record<string, unknown> = {
  businessCenter: {
    description:
      'A code identifying one or several business day calendar location(s). The set of business day calendar locations are specified by the business day calendar location enumeration which is maintained by the FpML standard.\n',
    itemType: {
      blueId: '5kncd2YXvmwkRzZPfFr5Ji5fZfkk9WoNmLNAkjcvS9cD',
    },
    schema: {
      minItems: 0,
    },
    type: {
      blueId: '8DSFoWG9MqRSUhStqoPLrwVQiYByRh18NWbDEarN8MKF',
    },
  },
  businessCentersReference: {
    description:
      'A reference to a financial business center location specified elsewhere in the instance document.',
    type: {
      blueId: '7ACnecbuWHtBLYhrw8BaioS3DSUQFiDskjpaDNspEmof',
    },
  },
  commodityBusinessCalendar: {
    itemType: {
      blueId: 'HLumy3ihw3YkMVGzNShUKY7ZWZCb7A9yMvGDoaLMqboa',
    },
    schema: {
      minItems: 0,
    },
    type: {
      blueId: '8DSFoWG9MqRSUhStqoPLrwVQiYByRh18NWbDEarN8MKF',
    },
  },
  description:
    'A class for specifying the business day calendar location used in determining whether a day is a business day or not, either by specifying this business center by reference to an enumerated list that is maintained by the FpML standard, or by reference to such specification when it exists elsewhere as part of the instance document. This class corresponds to the FpML BusinessCentersOrReference.model.\n',
  name: 'cdm/base/datetime/BusinessCenters',
};
