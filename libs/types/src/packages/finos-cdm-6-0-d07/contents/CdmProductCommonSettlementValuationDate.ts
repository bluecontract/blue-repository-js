export const CdmProductCommonSettlementValuationDate = {
  description:
    'A single object that represents the different methods to specify a valuation date, as used for cash settlement. The Single / Multiple ValuationDate is used for the determination of recovery in a credit event, the RelativeDateOffset is used for cash-settled option, and FxFixingDate is used for cross-currency settlement.\n',
  fxFixingDate: {
    description:
      "The date on which the currency rate will be determined for the purpose of specifying the amount in deliverable currency. This attribute was formerly part of 'NonDeliverableSettlement', which is now being harmonised into a common 'CashSettlementTerms' that includes a 'ValuationDate'.\n",
    type: {
      blueId: '8eCwVe8o3HJ59kXXDpmZNzc3nFwUj5KV4TtcM7LbwaRA',
    },
  },
  fxFixingSchedule: {
    description:
      "The date, when expressed as a schedule of date(s), on which the currency rate will be determined for the purpose of specifying the amount in deliverable currency. This attribute was formerly part of 'NonDeliverableSettlement', which is now being harmonised into a common 'CashSettlementTerms' that includes a 'ValuationDate'.\n",
    type: {
      blueId: '3UQyaunu7noHsnkXtFNJHuwdv1AH6Uq6MZ1bZSHN9hYW',
    },
  },
  multipleValuationDates: {
    description:
      'Where multiple valuation dates are specified as being applicable for cash settlement, this element specifies (a) the number of applicable valuation dates, and (b) the number of business days after satisfaction of all conditions to settlement when the first such valuation date occurs, and (c) the number of business days thereafter of each successive valuation date. ISDA 2003 Term: Multiple Valuation Dates.\n',
    type: {
      blueId: '3TzCHW48PK6kL5s7n3x7jyA7VmeiJJ9D2JgzR53cTcPe',
    },
  },
  name: 'cdm/product/common/settlement/ValuationDate',
  singleValuationDate: {
    description:
      'Where single valuation date is specified as being applicable for cash settlement, this element specifies the number of business days after satisfaction of all conditions to settlement when such valuation date occurs. ISDA 2003 Term: Single Valuation Date.\n',
    type: {
      blueId: '8EqwdQrn5Dw7AHtUZT6rtQFm2KyamTxrfc8dzdBkyRcU',
    },
  },
  valuationDate: {
    description:
      "The date on which the cash settlement amount will be determined according to the cash settlement method if the parties have not otherwise been able to agree the cash settlement amount. This attribute was formerly part of 'OptionCashSettlement', which is now being harmonised into a common 'CashSettlementTerms' that includes a 'ValuationDate'.\n",
    type: {
      blueId: '2wAd2mDukRH6r2YEZ4kU9e1fcUYpGHT8ZJEwFZFkKaCL',
    },
  },
} as const;
