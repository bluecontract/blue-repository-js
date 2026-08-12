export const StatusChange: Record<string, unknown> = {
  description:
    'Event announcing that a status value has changed or should be observed as changed. Status Change is useful when a\nworkflow wants to notify participants or parent scopes about state progress without exposing an entire document\nsnapshot.\n\nThe `status` field carries the new status object. Consumers should use the status type and `mode` value rather than\nparsing human-readable text.\n',
  name: 'Status Change',
  status: {
    description:
      'New status value. Usually a Document Status specialization such as Status Pending, Status In Progress, Status\nCompleted, or Status Failed.\n',
    type: {
      blueId: '6aAJEFVdFAgLVre8azY4YZQnNiv2FkXJpdpGAYSHiNrY',
    },
  },
  type: {
    blueId: 'ENRQ621TbJpLg2cGyYkgTmPRLGKZkPqCzkBgm4yEXKF5',
  },
};
