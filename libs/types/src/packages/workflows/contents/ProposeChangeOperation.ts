export const ProposeChangeOperation: Record<string, unknown> = {
  description:
    'Operation marker for proposing a Change Request without applying it immediately. The operation records a proposed\nchange under proposal state so another participant or policy-controlled workflow can later accept or reject it.\n\nPropose Change is used when a document requires review, approval, negotiation, or human consent before applying a\nmutation. The request shape is Workflows/Change Request, including a summary and optional structured sectionChanges.\nThe operation itself only declares the action; the paired Propose Change Workflow implements storage and validation.\n',
  name: 'Propose Change Operation',
  request: {
    type: {
      blueId: '6DTYzUFXoVEV5WjVKmQveSztfXfVN5nr1bso3ygW9ocU',
    },
  },
  type: {
    blueId: 'wGksq5vE8TroTr6StteHDnMx9mJKqT7dHoYT9bEddym',
  },
};
