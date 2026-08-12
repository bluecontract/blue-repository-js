export const CdmProductCommonScheduleFxLinkedNotionalSchedule: Record<
  string,
  unknown
> = {
  description:
    'A data to:  describe a notional schedule where each notional that applies to a calculation period is calculated with reference to a notional amount or notional amount schedule in a different currency by means of a spot currency exchange rate which is normally observed at the beginning of each period.\n',
  fixingTime: {
    description:
      'The time at which the spot currency exchange rate will be observed. It is specified as a time in a business day calendar location, e.g. 11:00am London time.\n',
    type: {
      blueId: '4muK6BKTZZzEij2eR3Dg7sQxj224LzRoyzr5n7UcAR3X',
    },
  },
  fxSpotRateSource: {
    description:
      'The information source and time at which the spot currency exchange rate will be observed.',
    schema: {
      required: true,
    },
    type: {
      blueId: '4Jbze8eVmcTD1NE4zxdWWA7NuWrvuqjSc5a68zCAQD7h',
    },
  },
  name: 'cdm/product/common/schedule/FxLinkedNotionalSchedule',
  varyingNotionalCurrency: {
    description:
      'The currency of the varying notional amount, i.e. the notional amount being determined periodically based on observation of a spot currency exchange rate. The list of valid currencies is not presently positioned as an enumeration as part of the CDM because that scope is limited to the values specified by ISDA and FpML. As a result, implementers have to make reference to the relevant standard, such as the ISO 4217 standard for currency codes.\n',
    schema: {
      required: true,
    },
    type: {
      blueId: 'HvrBWWRL9WzJPU9bs48T3Uf9CcUgCfqtEszZPN3tYS3n',
    },
  },
  varyingNotionalFixingDates: {
    description:
      'The dates on which spot currency exchange rates are observed for purposes of determining the varying notional currency amount that will apply to a calculation period.\n',
    schema: {
      required: true,
    },
    type: {
      blueId: '9fGwsBbeyL5rQuLRmwyBtyjMjAcmhWfHf4bmyqAXmWtD',
    },
  },
  varyingNotionalInterimExchangePaymentDates: {
    description:
      'The dates on which interim exchanges of notional are paid. Interim exchanges will arise as a result of changes in the spot currency exchange amount or changes in the constant notional schedule (e.g. amortisation).\n',
    schema: {
      required: true,
    },
    type: {
      blueId: '9fGwsBbeyL5rQuLRmwyBtyjMjAcmhWfHf4bmyqAXmWtD',
    },
  },
};
