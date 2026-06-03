export const CdmObservableAssetPrice: Record<string, unknown> = {
  arithmeticOperator: {
    description:
      '(Optionally) When the price is to be understood as an operator to apply to an observable, i.e. a spread, multiplier or min/max.\n',
    type: {
      blueId: '8G8JMx9Qw4DFmuzKHtJVfUGbY57zaKc4EsT77wyLek9y',
    },
  },
  cashPrice: {
    description:
      '(Optionally when the price type is cash) Additional attributes that further define a cash price, e.g. what type of fee it is.\n',
    type: {
      blueId: 'EdLKjCfief3mhGVbVnHDpyHDKbTXHYqXoaTKtcn9EjDL',
    },
  },
  composite: {
    description:
      '(Optionally) Specifies the underlying price components if the price can be expressed as a composite: e.g. dirty price = clean price + accrued.\n',
    type: {
      blueId: 'EjBpyo5KGACQ7knjNw98Y71wwTCGfQn96DouM8q8m7Gu',
    },
  },
  datedValue: {
    description:
      'A schedule of step date and value pairs. On each step date the associated step value becomes effective. The step dates are used to order the steps by ascending order. This attribute is optional so the data type may be used to define a schedule with a single value.\n',
    itemType: {
      blueId: '9zYcb3FcpfuBbxSMqUwSRoYJ3gPs7Nv1qeZUmFvVniPL',
    },
    schema: {
      minItems: 0,
    },
    type: {
      blueId: '8DSFoWG9MqRSUhStqoPLrwVQiYByRh18NWbDEarN8MKF',
    },
  },
  description:
    'Specifies a price as a single value to be associated to a financial product. This data type extends PriceSchedule and requires that only the amount value exists.\n',
  name: 'cdm/observable/asset/Price',
  perUnitOf: {
    description:
      'Provides an attribute to define the unit of the thing being priced. For example, {amount, unitOfAmount, PerUnitOfAmount} = [10, EUR, Shares] = (10.00 EUR/SHARE) * (300,000 SHARES) = EUR 3,000,000.00 (Shares cancel out in the calculation).\n',
    type: {
      blueId: 'DJ7mNRisRDzwiXVunMHLfDzvMqVHiQo2iHab3fCmxUL7',
    },
  },
  priceExpression: {
    description:
      '(Optionally) Specifies whether the price is expressed in absolute or percentage terms.',
    type: {
      blueId: 'DGw3j3EkTUgoJb9WQD39BfVPHsqnL4bXU5uXCMnmCe3v',
    },
  },
  priceType: {
    description:
      "Specifies the price type as an enumeration: interest rate, exchange rate, asset price etc. This attribute is mandatory so that prices can always be clasiffied according to their type. The price type implies some constraints on the price's units.\n",
    type: {
      blueId: '57TNhfCPohyptzE8EPedTDH19ZH7MkzMEo4S8VWeQ9Ck',
    },
  },
  unit: {
    description:
      'Qualifies the unit by which the amount is measured. Optional because a measure may be unit-less (e.g. when representing a ratio between amounts in the same unit).\n',
    type: {
      blueId: 'DJ7mNRisRDzwiXVunMHLfDzvMqVHiQo2iHab3fCmxUL7',
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
