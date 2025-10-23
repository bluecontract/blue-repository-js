export const childPayNoteIssued = {
  name: 'Child PayNote Issued',
  description:
    'The Guarantor confirms that a new Child PayNote has been issued against this parent.',
  type: {
    blueId: '3Dcy3LEaQW8pEFy2diJ9YZk1KDoDyu3i4huKhWXpN5BG',
  },
  childPayNote: {
    description: 'Content of the issued PayNote',
  },
} as const;
