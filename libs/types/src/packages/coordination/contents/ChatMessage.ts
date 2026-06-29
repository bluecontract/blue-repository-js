export const ChatMessage: Record<string, unknown> = {
  description:
    'Human-readable coordination event. Chat Message records text intended for participants or auditors when no more\nspecific machine-actionable event type is required.\n\nThe `message` text is identity-bearing exactly as authored. If the message is stored in a Timeline Entry, actor,\nsource, timestamp, and provider completeness belong to the enclosing Timeline Entry. Use concrete operation or status\nevent types when workflow logic must react to structured fields rather than free text.\n',
  message: {
    description:
      'Textual content of the message. Exact spelling, whitespace, and Unicode code points are part of the Blue value.\n',
    type: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
  },
  name: 'Chat Message',
  replyTo: {
    description:
      'Optional timeline entry this chat message replies to or comments on. In concrete documents this may be represented\nby the full Timeline Entry object or by a BlueId reference to that entry.\n',
    type: {
      blueId: 'HtPs8QJAUfc25fKanzLFjAqjbbhyFjDErYxjKdTCwARV',
    },
  },
  type: {
    blueId: 'ENRQ621TbJpLg2cGyYkgTmPRLGKZkPqCzkBgm4yEXKF5',
  },
};
