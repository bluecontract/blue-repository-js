export const CdmEventPositionContractBase = {
  collateral: {
    description: 'Represents the collateral obligations of a party.',
    type: {
      blueId: '7j2afftZwsKVHvwsGny36DeHZyszQTNjaKddY3EUPFWP',
    },
  },
  contractDetails: {
    description:
      'Represents information specific to trades or positions involving contractual products.',
    type: {
      blueId: 'B8n9R5augGxzewv3AeZA4bBhgHYizX9BW45egn8ua3br',
    },
  },
  description: 'Encapsulates data features common to trade and position.',
  executionDetails: {
    description:
      'Defines specific attributes that relate to trade or position executions.',
    type: {
      blueId: 'CMP6Shj6SxTXkHaZATbUmY9anEdJwQH5tnPfbddySWBo',
    },
  },
  name: 'cdm/event/position/ContractBase',
} as const;
