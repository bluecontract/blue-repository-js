export const CdmObservableAssetPriceSchedule: Record<string, unknown> = {
  arithmeticOperator: {
    description:
      '(Optionally) When the price is to be understood as an operator to apply to an observable, i.e. a spread, multiplier or min/max.\n',
    type: {
      blueId: '5LqvSmiKbHfda3hZ4PJPNrsBm6612qKucN15UXbStsiT',
    },
  },
  cashPrice: {
    description:
      '(Optionally when the price type is cash) Additional attributes that further define a cash price, e.g. what type of fee it is.\n',
    type: {
      blueId: 'CaWpmLo2CzXteNgpMQ2nPagGfg3K7ETP5wMbxbxnhBx3',
    },
  },
  composite: {
    description:
      '(Optionally) Specifies the underlying price components if the price can be expressed as a composite: e.g. dirty price = clean price + accrued.\n',
    type: {
      blueId: '6tfFx6LjQPd8i3zPXbCkuh3MhNp2C1Ns5HdLRXK7G6eE',
    },
  },
  datedValue: {
    description:
      'A schedule of step date and value pairs. On each step date the associated step value becomes effective. The step dates are used to order the steps by ascending order. This attribute is optional so the data type may be used to define a schedule with a single value.\n',
    itemType: {
      blueId: '9QEEP3vJftxGgridJuAvcaKfZusGZVsywkfLzikwpM28',
    },
    schema: {
      minItems: 0,
    },
    type: {
      blueId: '8DSFoWG9MqRSUhStqoPLrwVQiYByRh18NWbDEarN8MKF',
    },
  },
  description:
    'Specifies the price of a financial instrument in a trade as a schedule of measures. A price generically expresses the value of an exchange as a ratio: it measures the amount of one thing needed to be exchanged for 1 unit of another thing (e.g. cash in a specific currency in exchange for a bond or share). This generic representation can be used to support any type of financial price beyond just cash price: e.g. an interest rate, a foreign exchange rate, etc. This data type is generically based on a schedule and can also be used to represent a price as a single value.\n',
  name: 'cdm/observable/asset/PriceSchedule',
  perUnitOf: {
    description:
      'Provides an attribute to define the unit of the thing being priced. For example, {amount, unitOfAmount, PerUnitOfAmount} = [10, EUR, Shares] = (10.00 EUR/SHARE) * (300,000 SHARES) = EUR 3,000,000.00 (Shares cancel out in the calculation).\n',
    type: {
      blueId: '7qE4tr7jZifDuYrWwGZeTpRV1CFde8FZtHmFepTZ1t8F',
    },
  },
  priceExpression: {
    description:
      '(Optionally) Specifies whether the price is expressed in absolute or percentage terms.',
    type: {
      blueId: 'FR2Gc8atUr5LZxtstV7pHAJggL6G9X2a2mV3nCy3FcWN',
    },
  },
  priceType: {
    description:
      "Specifies the price type as an enumeration: interest rate, exchange rate, asset price etc. This attribute is mandatory so that prices can always be clasiffied according to their type. The price type implies some constraints on the price's units.\n",
    schema: {
      required: true,
    },
    type: {
      blueId: '9xUkR83yqGdL6Xn56YXmLfhwiba4FD17zN5Rp99ACGcF',
    },
  },
  unit: {
    description:
      'Qualifies the unit by which the amount is measured. Optional because a measure may be unit-less (e.g. when representing a ratio between amounts in the same unit).\n',
    type: {
      blueId: '7qE4tr7jZifDuYrWwGZeTpRV1CFde8FZtHmFepTZ1t8F',
    },
  },
  val: {
    description:
      'Specifies the value of the measure as a number. Optional because in a measure vector or schedule, this single value may be omitted.\n',
    type: {
      blueId: '9eWaHYz2vKrFofdHTHAizNNu8xP6QE3WQ5y7DGrGZvyJ',
    },
  },
};
