export const CdmObservableAssetPriceSchedule = {
  arithmeticOperator: {
    description:
      '(Optionally) When the price is to be understood as an operator to apply to an observable, i.e. a spread, multiplier or min/max.\n',
    type: {
      blueId: '7PeesYPnoTZrVwovaiKPhiXVvtX9xYNf8gSPTGKzBsaF',
    },
  },
  cashPrice: {
    description:
      '(Optionally when the price type is cash) Additional attributes that further define a cash price, e.g. what type of fee it is.\n',
    type: {
      blueId: 'EBxPTGdUnubTi1nPQX8vJqTa8Q5FX7fvkCdtYQrZyUdg',
    },
  },
  composite: {
    description:
      '(Optionally) Specifies the underlying price components if the price can be expressed as a composite: e.g. dirty price = clean price + accrued.\n',
    type: {
      blueId: 'BoD5XyrRXadR1NLz2BSQ2UQ34JUbjZPKbt59eNzTqx6N',
    },
  },
  datedValue: {
    description:
      'A schedule of step date and value pairs. On each step date the associated step value becomes effective. The step dates are used to order the steps by ascending order. This attribute is optional so the data type may be used to define a schedule with a single value.\n',
    itemType: {
      blueId: '4Goc1Ax7PdSp2KoLBDYnqrtvCeRBneZD8E97GQazSXQv',
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
    'Specifies the price of a financial instrument in a trade as a schedule of measures. A price generically expresses the value of an exchange as a ratio: it measures the amount of one thing needed to be exchanged for 1 unit of another thing (e.g. cash in a specific currency in exchange for a bond or share). This generic representation can be used to support any type of financial price beyond just cash price: e.g. an interest rate, a foreign exchange rate, etc. This data type is generically based on a schedule and can also be used to represent a price as a single value.\n',
  name: 'cdm/observable/asset/PriceSchedule',
  perUnitOf: {
    description:
      'Provides an attribute to define the unit of the thing being priced. For example, {amount, unitOfAmount, PerUnitOfAmount} = [10, EUR, Shares] = (10.00 EUR/SHARE) * (300,000 SHARES) = EUR 3,000,000.00 (Shares cancel out in the calculation).\n',
    type: {
      blueId: '7UDCVn3tDYHeQBU818n6bFdccjBeDPrc6GddKWkT4WDu',
    },
  },
  priceExpression: {
    description:
      '(Optionally) Specifies whether the price is expressed in absolute or percentage terms.',
    type: {
      blueId: '5oss5vAthfdDyx4i1CUcAgeHxzWsk2SCDGWtrZ76qZzi',
    },
  },
  priceType: {
    description:
      "Specifies the price type as an enumeration: interest rate, exchange rate, asset price etc. This attribute is mandatory so that prices can always be clasiffied according to their type. The price type implies some constraints on the price's units.\n",
    schema: {
      required: {
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
        value: true,
      },
    },
    type: {
      blueId: 'C1BmErqx6smbQokFqorQp8PqoSsJWkSGu3M3mD78tJAq',
    },
  },
  unit: {
    description:
      'Qualifies the unit by which the amount is measured. Optional because a measure may be unit-less (e.g. when representing a ratio between amounts in the same unit).\n',
    type: {
      blueId: '7UDCVn3tDYHeQBU818n6bFdccjBeDPrc6GddKWkT4WDu',
    },
  },
  val: {
    description:
      'Specifies the value of the measure as a number. Optional because in a measure vector or schedule, this single value may be omitted.\n',
    type: {
      blueId: '7pwXmXYCJtWnd348c2JQGBkm9C4renmZRwxbfaypsx5y',
    },
  },
} as const;
