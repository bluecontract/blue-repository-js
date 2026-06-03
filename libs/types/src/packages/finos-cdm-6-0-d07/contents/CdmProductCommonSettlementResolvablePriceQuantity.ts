export const CdmProductCommonSettlementResolvablePriceQuantity: Record<
  string,
  unknown
> = {
  description:
    'Generic class to specify the quantity for different payout legs in a contractual product, when that quantity can vary across payout legs or across time. A resolvable quantity can always be resolved into a single quantity from the quantity notation which has a corresponding asset identifier. In addition to the base case, where quantity is directly specified as a number as part of the quantity notation, the other use cases are: (i) quantity based on some pre-defined schedule (eg amortising notional), (ii) quantity based on some pre-defined events (eg resetting cross-currency notional), or quantity set as reference to another quantity (eg equity notional as no. securities x price).\n',
  futureValueNotional: {
    description:
      'The future value notional is specific to BRL CDI swaps, and is specified alongside the notional amount. The value is calculated as follows: Future Value Notional = Notional Amount * (1 + Fixed Rate) ^ (Fixed Rate Day Count Fraction). The currency should always match that expressed in the notional schedule. The value date should match the adjusted termination date.\n',
    type: {
      blueId: '8KR7WNN1kPD6WbWLzqQ3tozV5eP1w3ioLjp9aTZLW14L',
    },
  },
  name: 'cdm/product/common/settlement/ResolvablePriceQuantity',
  priceSchedule: {
    description:
      "A payout's price specified as a schedule, which may also contain a single value if that price is constant. There may be multiple prices specified for a single payout: e.g. a floating interest rate leg may specify a spread, a cap and/or floor and a multiplier. The price must be specified outside of the payout in a PriceQuantity object and only referenced inside the payout using an address.\n",
    itemType: {
      blueId: '2Uog2mdWokkHVaMVWG2ZhXCKPdQtauRk7oxemYRLn9hy',
    },
    schema: {
      minItems: 0,
    },
    type: {
      blueId: '8DSFoWG9MqRSUhStqoPLrwVQiYByRh18NWbDEarN8MKF',
    },
  },
  quantityMultiplier: {
    description:
      'Quantity multiplier is specified on top of a reference quantity and is used as a multiplying factor when resolving the quantity. A quantity multiplier can only exist when the resolvable quantity specifies a reference quantity.\n',
    type: {
      blueId: 'DJFB2Tj6nmeKEJudCnrcJLRjTfjdUDQDmosfijnNhHrg',
    },
  },
  quantityReference: {
    description:
      'Reference quantity when resolvable quantity is defined as relative to another (resolvable) quantity. A resolvable quantity needs to contain either an absolute quantity or a reference to another (resolvable) quantity. This requirement is captured by a choice rule on the class.\n',
    type: {
      blueId: 'Dyqr7TA1HN5EcvzLV8Yzj2SDcBRhKaKqVGCBXkTfUDZZ',
    },
  },
  quantitySchedule: {
    description:
      "A payout's quantity specified as a schedule, which may also contain a single value if that quantity is constant. There can only be a single quantity schedule applicable to a payout: e.g. the notional for an interest rate leg. The quantity must be specified outside of the payout in a PriceQuantity object and only referenced inside the payout using an address.\n",
    type: {
      blueId: '3QpANvMr6891ZuV6c8Yze7qcCyqbKRhy9zqwHuMkw8FP',
    },
  },
  reset: {
    description: 'Whether the quantity is resettable',
    type: {
      blueId: 'AwvXD961fmnmqcSQhjMA7r15HpVh39cefb6ZTyUz2Fm2',
    },
  },
  resolvedQuantity: {
    description:
      "A product's quantity as a single, non-negative amount.  When specified as part of a product definition, this quantity attribute would not be set.  Instead it is specified on the quantity notation along with an asset identifier matching this payout's asset identifier.  This allows the quantity to be resolved for a payout leg, which can then be specified here for convenience during data processing.  There needs to be at least one resolvable quantity across payout legs of a product to define an anchor that other payout quantities can refer to.  This attribute is ignored when mapping existing FpML messages.\n",
    type: {
      blueId: 'DGJZYRtm8AD2nG2o56eH5EDc8FujZiiXmBsuHgLf3UCR',
    },
  },
};
