export const CdmProductCommonScheduleResetDates: Record<string, unknown> = {
  calculationPeriodDatesReference: {
    description:
      'A pointer style reference to the associated calculation period dates component defined elsewhere in the document.\n',
    type: {
      blueId: '5kML8V9qeDP2N3N3L173vbHKEbT1tjwLQ89bXgwhB2jf',
    },
  },
  description:
    'A data defining:  the parameters used to generate the reset dates schedule and associated fixing dates. The reset dates are the dates on which the new index value (which is observed on the fixing date) is applied for each period and on which the interest rate hence begins to accrue.\n',
  finalFixingDate: {
    description:
      'This attribute is not part of the FpML ResetDate, and has been added as part of the CDM to support the credit derivatives final fixing date.\n',
    type: {
      blueId: 'J1kGTdAb67L1bPgvuKZ86jTR9UZJomnkgA6hcnVfnwfD',
    },
  },
  fixingDates: {
    description:
      "The fixing dates are the dates on which the index values are observed. The fixing dates are specified by reference to the reset date through business days offset and an associated set of financial business centers. Normally these offset calculation rules will be those specified in the ISDA definition for the relevant floating rate index (ISDA's Floating Rate Option). However, non-standard offset calculation rules may apply for a trade if mutually agreed by the principal parties to the transaction.\n",
    type: {
      blueId: '9fGwsBbeyL5rQuLRmwyBtyjMjAcmhWfHf4bmyqAXmWtD',
    },
  },
  initialFixingDate: {
    description: 'The initial fixing date.',
    type: {
      blueId: '7nNj43B1u5wkoCzUNC1xJyS3yxbc4tAcr2rmBszM9rgw',
    },
  },
  name: 'cdm/product/common/schedule/ResetDates',
  rateCutOffDaysOffset: {
    description:
      'Specifies the number of business days before the period end date when the rate cut-off date is assumed to apply. The financial business centers associated with determining the rate cut-off date are those specified in the reset dates adjustments. The rate cut-off number of days must be a negative integer (a value of zero would imply no rate cut off applies in which case the rateCutOffDaysOffset element should not be included). The relevant rate for each reset date in the period from, and including, a rate cut-off date to, but excluding, the next applicable period end date (or, in the case of the last calculation period, the termination date) will (solely for purposes of calculating the floating amount payable on the next applicable payment date) be deemed to be the relevant rate in effect on that rate cut-off date. For example, if rate cut-off days for a daily averaging deal is -2 business days, then the refix rate applied on (period end date - 2 days) will also be applied as the reset on (period end date - 1 day), i.e. the actual number of reset dates remains the same but from the rate cut-off date until the period end date, the same refix rate is applied. Note that in the case of several calculation periods contributing to a single payment, the rate cut-off is assumed only to apply to the final calculation period contributing to that payment. The day type associated with the offset must imply a business days offset.\n',
    type: {
      blueId: 'GWTMGPw1zgQW3M9NUS6RxNtce5jWU9defVNkm7sV6b8L',
    },
  },
  resetDatesAdjustments: {
    description:
      'The definition of the business day convention and financial business centers used for adjusting the reset date if it would otherwise fall on a day that is not a business day in the specified business center.\n',
    type: {
      blueId: 'AKAczd79wtoD2Vt7VjdFdnWeacw86mQTVeLcyS9SWFZz',
    },
  },
  resetFrequency: {
    description:
      'The frequency at which the reset dates occur. In the case of a weekly reset frequency, also specifies the day of the week that the reset occurs. If the reset frequency is greater than the calculation period frequency then this implies that more than one reset is established for each calculation period and some form of rate averaging is applicable.\n',
    type: {
      blueId: 'AF5YX5ckQEQZD9m6QJzHQVPjpFFBeLnKV7o2AHf2HpW',
    },
  },
  resetRelativeTo: {
    description:
      'Specifies whether the reset dates are determined with respect to each adjusted calculation period start date or adjusted calculation period end date. If the reset frequency is specified as daily this element must not be included.\n',
    type: {
      blueId: '3ZYqtSitUczzgy8NY3j1qRo5fJi2TtUC4AfsKAq6bs3V',
    },
  },
};
