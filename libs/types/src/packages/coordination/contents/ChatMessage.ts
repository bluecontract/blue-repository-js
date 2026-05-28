export const ChatMessage = {
  description:
    'Simple coordination event representing a human-readable message exchanged through a document or timeline. Chat Message\nis useful for informal communication, notifications, and audit-visible commentary when the message itself is not a\nstructured operation request.\n\nThe `message` field contains the text shown to participants. Because it is Blue content, exact text, whitespace, and\nUnicode code points are identity-bearing. If a chat message is placed in a Timeline Entry, actor and source attribution\nbelong to the Timeline Entry, not to this event type.\n\nChat Message should not be used when the document needs deterministic machine-actionable semantics. In that case, use a\nconcrete Operation Request, Status Change, Customer Action event, or domain-specific event type with typed fields.\n',
  message: {
    description: 'The textual content of the chat message.',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  name: 'Chat Message',
  type: {
    blueId: '7ugyHm8fpgvQx6pbLcW8cRNLBVDBExCp2iSYgd82ak6z',
  },
} as const;
