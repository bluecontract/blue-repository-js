export const Request: Record<string, unknown> = {
  description:
    'Base event/content type for request objects that can be paired with responses. A Request identifies an intent or\nquestion that another participant, document, provider, or workflow may answer.\n\n`requestId` is the stable correlation key. It should be unique in the relevant conversation, timeline, operation, or\ndocument scope so that responses and follow-up events can refer back to the original request deterministically.\n',
  name: 'Request',
  requestId: {
    description:
      'Stable request correlation identifier. It is not necessarily globally unique, but it should be unique in the scope or\nconversation where responses are matched.\n',
    type: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
  },
  type: {
    blueId: 'ENRQ621TbJpLg2cGyYkgTmPRLGKZkPqCzkBgm4yEXKF5',
  },
};
