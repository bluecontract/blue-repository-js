export const Response: Record<string, unknown> = {
  description:
    'A Message that answers a Request. A single Request may receive multiple Responses, including responses from several participants or successive responses from one participant. A Response does not by itself perform an operation unless its concrete type and enclosing document contracts define that behavior.\n',
  inResponseTo: {
    description:
      'Required reference to the exact Coordination/Request occurrence answered by this Response.\n',
    schema: {
      required: true,
    },
    type: {
      blueId: '6XYXgjV6ja1oLqLCs3TWy4RP5UwmpPZKcppBfwwXcckU',
    },
  },
  name: 'Response',
  type: {
    blueId: '768MxgQEHnLSkedHWHtjj43mAjH361Zf6pKZgVxi5po3',
  },
};
