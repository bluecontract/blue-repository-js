export const CdmEventCommonTransfer: Record<string, unknown> = {
  asset: {
    description:
      'Represents the object that is subject to the transfer, it could be an asset or a reference.',
    type: {
      blueId: '8CTGmD55ifZ1AAAr4uYZHw9mUCiZ7foMLqYSEUbPVz3Q',
    },
  },
  description:
    'Defines the movement of an Asset (eg cash, securities or commodities) between two parties on a date.',
  identifier: {
    description: 'Represents a unique reference to the transfer.',
    itemType: {
      blueId: '6qRBmHGpanZLqon5ADoUepYe9Cb8ddGJqU4tQKaj2ugi',
    },
    schema: {
      minItems: 0,
    },
    type: {
      blueId: '8DSFoWG9MqRSUhStqoPLrwVQiYByRh18NWbDEarN8MKF',
    },
  },
  name: 'cdm/event/common/Transfer',
  payerReceiver: {
    description: 'Represents the parties to the transfer and their role.',
    schema: {
      required: true,
    },
    type: {
      blueId: '63Bw1Ena6g9zgLcVwPkkpApxNVecQwz8Ygi9rZZFYMoB',
    },
  },
  quantity: {
    description:
      'Represents the amount of the asset to be transferred. The cashflow amount is always a positive number, as the cashflow direction is implied by the payer/receiver attribute.\n',
    type: {
      blueId: '6jhJaMEanZrm8mpgb8YxWqCNs2c2UY9AoQigsG7hoNgw',
    },
  },
  resetOrigin: {
    description:
      'Represents the reset and observation values that were used to determine the transfer amount.',
    type: {
      blueId: '7vPrkkWh58nfDDkqkzYizHoGeQi5BC57ZpmFndxmft9R',
    },
  },
  settlementDate: {
    description: 'Represents the date on which the transfer to due.',
    type: {
      blueId: 'EsGmKpSwEv5rrzVy75nUtg6sXKYHCmZRDzkGMYyQ7zhX',
    },
  },
  settlementOrigin: {
    description:
      'Represents the origin to the transfer as a reference for lineage purposes, whether it originated from trade level settlement terms or from payment terms on an economic payout.\n',
    type: {
      blueId: 'B5Jakr9Bd7eaMZzThRtLAaP1ZnjC3yngwZjL4GXVZW7P',
    },
  },
  transferExpression: {
    description:
      'Specifies a transfer expression (cash price, performance amount, scheduled payment amount, etc.) to define the nature of the transfer amount and its source.\n',
    schema: {
      required: true,
    },
    type: {
      blueId: '7yFSif63nzYVPnA288VLWxYHoa2GYMW8nXiAbUwJ6hpG',
    },
  },
};
