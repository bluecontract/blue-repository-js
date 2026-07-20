export const TimelineChannel: Record<string, unknown> = {
  actor: {
    description:
      'Actor represented by this channel. A feeder matches this actor against the actor attributed on a candidate Timeline Entry.\n',
    schema: {
      required: true,
    },
    type: {
      blueId: 'GnMntk3hLvHEsZTBE8Gk7ytPBexj6jhBJHdaxnJYhEQ7',
    },
  },
  description:
    'External Coordination channel backed by one timeline and bound to one actor in the containing document. A feeder uses both bindings to determine whether a Timeline Entry is eligible through this channel. The same timeline may be bound to several channels, but one input entry must never produce duplicate logical delivery solely because several bindings match.\n',
  name: 'Timeline Channel',
  timeline: {
    description:
      'Timeline whose entries may be accepted through this channel.\n',
    schema: {
      required: true,
    },
    type: {
      blueId: 'HAMjp2wA76Jhz8EGBDbfo9cqVyAq3vwVN4baKJBpj8KF',
    },
  },
  type: {
    blueId: '4FAZ94JPExNM4pn2ZhtdHa4CVP7uASmLNVrBy7aCG1p5',
  },
};
