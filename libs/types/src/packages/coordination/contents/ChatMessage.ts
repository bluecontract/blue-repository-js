export const ChatMessage: Record<string, unknown> = {
  description:
    'Free-text Message for humans. Chat Message records text intended for\nparticipants or auditors when no structured, machine-actionable Message type\nis required.\n\nAs a Coordination/Message it supports requestId, inResponseTo, threadId, and\nrecipientChannel. recipientChannel directs attention but does not make the\nMessage private. A Chat Message may comment on a Request but never fulfils it;\nonly a Coordination/Response answers a Request, and only concrete operation\ncontracts perform actions.\n',
  message: {
    description:
      'Textual content of the Message. Exact spelling, whitespace, and Unicode code\npoints are part of the Blue value.\n',
    schema: {
      required: true,
    },
    type: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
  },
  name: 'Chat Message',
  type: {
    blueId: '768MxgQEHnLSkedHWHtjj43mAjH361Zf6pKZgVxi5po3',
  },
};
