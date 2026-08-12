export const InformUserAboutPendingAction: Record<string, unknown> = {
  channel: {
    description: 'Channel or delivery route to use for informing the user.\n',
    type: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
  },
  description:
    'Workflow/operation type that asks the system to notify a user about a pending action. It is typically used when a\ndocument needs human attention: approval, consent, data entry, signature, correction, or review.\n\nThis type describes the notification request, not proof that the user has responded. A response should be represented\nby Customer Action Responded or another explicit event. The `expectedRequest` field can help the UI or notification\nsystem explain what kind of response should be sent back.\n',
  expectedRequest: {
    description:
      'Shape or description of the response expected from the user.\n',
  },
  message: {
    description: 'Detailed notification body.\n',
    type: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
  },
  name: 'Inform User About Pending Action',
  operation: {
    description: 'Operation name associated with the pending action.\n',
    type: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
  },
  title: {
    description: 'Short notification title.\n',
    type: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
  },
  type: {
    blueId: 'ENRQ621TbJpLg2cGyYkgTmPRLGKZkPqCzkBgm4yEXKF5',
  },
};
