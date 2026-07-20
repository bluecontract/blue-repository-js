export const MandateActivated: Record<string, unknown> = {
  description:
    'Lifecycle Message emitted by authority confirmation or another authorized\nmandate operation.\n\nThe inherited activation workflow accepts this Message while the mandate is\nin Mandate/Status Authority Confirmed, changes the status to\nMandate/Status Active, and derives activatedAt from the root causal Timeline\nEntry. This Message does not supply the effective timestamp and is not\nre-emitted by the accepting workflow. The inherited inResponseTo field may\nidentify the Message that caused activation.\n',
  name: 'Mandate Activated',
  type: {
    blueId: '768MxgQEHnLSkedHWHtjj43mAjH361Zf6pKZgVxi5po3',
  },
};
