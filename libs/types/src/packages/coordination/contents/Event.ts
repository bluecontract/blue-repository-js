export const Event: Record<string, unknown> = {
  description:
    'Base coordination type for Blue event payloads. An Event is a Blue node that may be placed in a Timeline Entry,\nemitted by a workflow, routed through a channel, or recorded for audit. Event itself defines no operation semantics;\nconcrete event types such as Operation Request, Chat Message, Status Change, Customer Action Requested, or domain\nevents provide the fields that processors and handlers understand.\n\nEvents are passive content. A Blue Contracts processor treats delivered event nodes as read-only. Matching,\nadaptation, authorization, and side effects are defined by channels, handlers, workflows, and policies. Because event\nnodes are Blue content, their exact fields, values, names, and descriptions participate in identity when they are\nhashed or stored.\n',
  name: 'Event',
};
