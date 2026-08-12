export const CdmProductTemplatePassThroughItem: Record<string, unknown> = {
  description: 'Class to represent a single pass through payment.',
  name: 'cdm/product/template/PassThroughItem',
  passThroughPercentage: {
    description:
      'Percentage of payments from the underlier which are passed through.',
    schema: {
      required: true,
    },
    type: {
      blueId: '9eWaHYz2vKrFofdHTHAizNNu8xP6QE3WQ5y7DGrGZvyJ',
    },
  },
  payerReceiver: {
    description:
      "This attribute doesn't exists in the FpML construct, which makes use of the PayerReceiver.model group.",
    schema: {
      required: true,
    },
    type: {
      blueId: 'JDAXkucJ2m4yHJZmHoTSjW5ZioDKLBu2dbM6gerfoyHn',
    },
  },
};
