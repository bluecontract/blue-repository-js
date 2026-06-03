export const CdmProductTemplateStrike: Record<string, unknown> = {
  buyer: {
    description: 'The buyer of the option.',
    type: {
      blueId: 'AYi3oguzR4Utfj7hc4duXgvb2M7SapBbYpq8SyJbHghs',
    },
  },
  description: 'A class describing a single cap or floor rate.',
  name: 'cdm/product/template/Strike',
  seller: {
    description: 'The party that has sold.',
    type: {
      blueId: 'AYi3oguzR4Utfj7hc4duXgvb2M7SapBbYpq8SyJbHghs',
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
