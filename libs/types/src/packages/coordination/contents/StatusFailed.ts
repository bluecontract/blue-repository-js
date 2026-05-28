export const StatusFailed = {
  description:
    "Document Status specialization for an unsuccessful final application state. Status Failed means the document's intended\nprocess could not complete due to an error, rejection, timeout, invalid input, policy failure, or other domain-specific\nreason.\n\nThis status is not the same as processor fatal termination, although a processor fatal may cause a document to set a\nfailed status if its workflows do so. It is a domain-level signal to participants that the document's goal was not\nachieved.\n",
  mode: {
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
    value: 'terminated',
  },
  name: 'Status Failed',
  type: {
    blueId: 'QHoUCCVhepZWQnSo9VfZCJWbSwyA9TuT65tBZMVtnRX',
  },
} as const;
