export const CdmProductTemplateStrike: Record<string, unknown> = {
  buyer: {
    description: 'The buyer of the option.',
    type: {
      blueId: '6SkJg8pab5GVfz2xgkk28fvdNU2iQBgrKksnGCuFMJZw',
    },
  },
  description: 'A class describing a single cap or floor rate.',
  name: 'cdm/product/template/Strike',
  seller: {
    description: 'The party that has sold.',
    type: {
      blueId: '6SkJg8pab5GVfz2xgkk28fvdNU2iQBgrKksnGCuFMJZw',
    },
  },
  strikeRate: {
    description: 'The rate for a cap or floor.',
    schema: {
      required: true,
    },
    type: {
      blueId: '9eWaHYz2vKrFofdHTHAizNNu8xP6QE3WQ5y7DGrGZvyJ',
    },
  },
};
