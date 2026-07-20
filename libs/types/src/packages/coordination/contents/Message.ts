export const Message: Record<string, unknown> = {
  description:
    'Base type for addressed, threadable communication between participants and documents. A Message may target a recipient channel, belong to a thread, and answer another Message. Requests, Responses, chat messages, operation requests, lifecycle messages, and document-emitted asks are all Messages, so one correlation model covers questions and answers, offers and counter-offers, asks and fulfilment, and free-form chat.\n',
  inResponseTo: {
    description:
      'Optional reference to the Message being answered, normally a pure { blueId: ... } reference to the exact Message occurrence or an equivalent materialized node. Any Message may answer any Message. Chains form a conversation tree; threadId provides direct grouping.\n',
  },
  name: 'Message',
  recipientChannel: {
    description:
      'Optional channel key identifying the participant this Message is addressed to. When absent, the Message is addressed to the table as a whole or to the document itself. Addressing does not make a Message private; visibility follows the enclosing document and timeline rules.\n',
    type: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
  },
  requestId: {
    description:
      'Optional application-level correlation key. It may group retries, provider work, or multiple messages associated with one logical request. It is not a substitute for inResponseTo, which identifies an exact Message occurrence.\n',
    type: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
  },
  threadId: {
    description:
      'Optional thread key grouping related Messages without requiring a consumer to walk an inResponseTo chain.\n',
    type: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
  },
  type: {
    blueId: 'ENRQ621TbJpLg2cGyYkgTmPRLGKZkPqCzkBgm4yEXKF5',
  },
};
