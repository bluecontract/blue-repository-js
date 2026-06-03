export const CdmProductAssetReferencePoolItem: Record<string, unknown> = {
  cashSettlementTermsReference: {
    description:
      'Reference to the cash settlement terms applicable to this item.',
    type: {
      blueId: '4LxF2iZVCWETVa5Sk6jK2WAVLX1SD7WaPtmgesb4xuBC',
    },
  },
  constituentWeight: {
    description:
      'Describes the weight of each of the constituents within the basket. If not provided, it is assumed to be equal weighted.\n',
    type: {
      blueId: '6eYoofdAibUdi9DT8tvNo7PNJF1DxZcM4UrQwinBs3mk',
    },
  },
  description:
    'This type contains all the constituent weight and reference information.',
  name: 'cdm/product/asset/ReferencePoolItem',
  physicalSettlementTermsReference: {
    description:
      'Reference to the physical settlement terms applicable to this item.',
    type: {
      blueId: '4zZq26rs1RRNTjwdwvbyZZAbRe3y2EykE2PtTne7suWB',
    },
  },
  protectionTermsReference: {
    description:
      'Reference to the documentation terms applicable to this item.',
    type: {
      blueId: 'D5MVAPQZZQMZXFW2noGBFFgRgvJ2sLSL8SKwphof8rd4',
    },
  },
  referencePair: {
    schema: {
      required: true,
    },
    type: {
      blueId: '6dgH4biBE9pfYSSx3pD7kWuYHhmxVmVGoHckDDNdqz85',
    },
  },
};
