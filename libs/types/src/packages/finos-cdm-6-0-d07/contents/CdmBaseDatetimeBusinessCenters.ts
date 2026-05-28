export const CdmBaseDatetimeBusinessCenters = {
  businessCenter: {
    description:
      'A code identifying one or several business day calendar location(s). The set of business day calendar locations are specified by the business day calendar location enumeration which is maintained by the FpML standard.\n',
    itemType: {
      blueId: '2Y1JVjnbbb22zrKVYtvVRfAkqMEsujAWoUHytGJxuprQ',
    },
    schema: {
      minItems: {
        type: {
          blueId: '5WNMiV9Knz63B4dVY5JtMyh3FB4FSGqv7ceScvuapdE1',
        },
        value: 0,
      },
    },
    type: {
      blueId: '6aehfNAxHLC1PHHoDr3tYtFH3RWNbiWdFancJ1bypXEY',
    },
  },
  businessCentersReference: {
    description:
      'A reference to a financial business center location specified elsewhere in the instance document.',
    type: {
      blueId: '4rV1yRtzeWP1SgQcDCpH4suo5UMbYFANCbKcwXZWtfQv',
    },
  },
  commodityBusinessCalendar: {
    itemType: {
      blueId: 'CFEktjfDYZuSwRvSqRUCwDkDa6kpoBHKx93zLdD4TNHr',
    },
    schema: {
      minItems: {
        type: {
          blueId: '5WNMiV9Knz63B4dVY5JtMyh3FB4FSGqv7ceScvuapdE1',
        },
        value: 0,
      },
    },
    type: {
      blueId: '6aehfNAxHLC1PHHoDr3tYtFH3RWNbiWdFancJ1bypXEY',
    },
  },
  description:
    'A class for specifying the business day calendar location used in determining whether a day is a business day or not, either by specifying this business center by reference to an enumerated list that is maintained by the FpML standard, or by reference to such specification when it exists elsewhere as part of the instance document. This class corresponds to the FpML BusinessCentersOrReference.model.\n',
  name: 'cdm/base/datetime/BusinessCenters',
} as const;
