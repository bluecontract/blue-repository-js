export const CdmProductAssetTranche: Record<string, unknown> = {
  attachmentPoint: {
    description:
      'Lower bound percentage of the loss that the Tranche can endure, expressed as a decimal. An attachment point of 5% would be represented as 0.05. The difference between Attachment and Exhaustion points is called the width of the Tranche.\n',
    schema: {
      required: true,
    },
    type: {
      blueId: '9eWaHYz2vKrFofdHTHAizNNu8xP6QE3WQ5y7DGrGZvyJ',
    },
  },
  description: 'The class to represent a CDS Tranche.',
  exhaustionPoint: {
    description:
      'Upper bound percentage of the loss that the Tranche can endure, expressed as a decimal. An exhaustion point of 5% would be represented as 0.05. The difference between Attachment and Exhaustion points is call the width of the Tranche.\n',
    schema: {
      required: true,
    },
    type: {
      blueId: '9eWaHYz2vKrFofdHTHAizNNu8xP6QE3WQ5y7DGrGZvyJ',
    },
  },
  incurredRecoveryApplicable: {
    description:
      'Outstanding Swap Notional Amount is defined at any time on any day, as the greater of: (a) Zero; If Incurred Recovery Amount Applicable: (b) The Original Swap Notional Amount minus the sum of all Incurred Loss Amounts and all Incurred Recovery Amounts (if any) determined under this Confirmation at or prior to such time.Incurred Recovery Amount not populated: (b) The Original Swap Notional Amount minus the sum of all Incurred Loss Amounts determined under this Confirmation at or prior to such time.\n',
    type: {
      blueId: 'AwvXD961fmnmqcSQhjMA7r15HpVh39cefb6ZTyUz2Fm2',
    },
  },
  name: 'cdm/product/asset/Tranche',
};
