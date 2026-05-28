export const CdmBaseStaticdataAssetCommonInstrument = {
  description:
    'A type of Asset that is issued by one party to one or more others.',
  ListedDerivative: {
    description:
      'A securitized derivative on another asset that is created by an exchange.',
    type: {
      blueId: '6QXysvk5wKooQQckLijtFXwzL8JzYBViFzRCkYPNJnSX',
    },
  },
  Loan: {
    description: 'An Asset that represents a loan or borrow obligation.',
    type: {
      blueId: 'DVipsn2Vc1vxevvyncjA1XjeWrMHt7pCWmHgf444oA6A',
    },
  },
  name: 'cdm/base/staticdata/asset/common/Instrument',
  Security: {
    description:
      'An Asset that is issued by a party to be held by or transferred to others.',
    type: {
      blueId: 'AKAF6F23pDRPx5M9gsqtAKXBUf46Vnz1STHsk38YEAWm',
    },
  },
} as const;
