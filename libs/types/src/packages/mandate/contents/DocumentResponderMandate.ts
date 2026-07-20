export const DocumentResponderMandate: Record<string, unknown> = {
  authorizedInitialDocument: {
    description: 'Initial document whose sessions may emit covered requests.',
    schema: {
      required: true,
    },
  },
  description:
    'Mandate authorizing the actor bound to authorizedActorChannel to respond to covered requests emitted by sessions of authorizedInitialDocument. The concrete request shape and additional conditions are defined through the inherited validation fields.\n',
  name: 'Document Responder Mandate',
  type: {
    blueId: '47V2fyZMejS7LMCqJ66MvJ6v7VcmLL1zyxGQM44svV4H',
  },
};
